import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { createTour, updateTour, fetchTour } from "../redux/actions/tours";
const Form = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [inputFiles, setInputFiles] = useState({
    title: "",
    description: "",
    tags: [],
    image: "",
  });

  const formData = new FormData();
  formData.append("title", inputFiles?.title);
  formData.append("description", inputFiles?.description);
  formData.append("tags", inputFiles?.tags);
  formData.append("image", inputFiles?.image);
  formData.append("creatorfname", user?.result?.firstname);
  formData.append("creatorlname", user?.result?.lastname);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, tour } = useSelector((state) => state.tours);

  useEffect(() => {
    if (id) setInputFiles(tour);
  }, [id, tour]);
  useEffect(() => {
    if (id) dispatch(fetchTour(id));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateTour(id, formData, navigate));
    } else {
      dispatch(createTour(formData, navigate));
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.5)",
          }}
        >
          <Typography variant="h4">{id ? "Edit Tour" : "Add Tour"}</Typography>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "500px",
              padding: "20px",
            }}
          >
            <input
              type="text"
              placeholder="title"
              value={inputFiles?.title}
              onChange={(e) =>
                setInputFiles({ ...inputFiles, title: e.target.value })
              }
              style={{ height: "40px" }}
            />
            <textarea
              cols="30"
              rows="10"
              value={inputFiles?.description}
              onChange={(e) =>
                setInputFiles({ ...inputFiles, description: e.target.value })
              }
            ></textarea>
            <input
              type="text"
              value={inputFiles?.tags?.join("  #")}
              onChange={(e) =>
                setInputFiles({
                  ...inputFiles,
                  tags: e.target.value.split(","),
                })
              }
              placeholder="tags (separated by comma ,)"
              style={{ height: "40px" }}
            />
            <input
              type="file"
              onChange={(e) =>
                setInputFiles({ ...inputFiles, image: e.target.files[0] })
              }
            />
            <button style={{ cursor: "pointer", height: "40px" }}>
              <div>
                {id ? (
                  <div>{isLoading ? "Editing ..." : "Edit"}</div>
                ) : (
                  <div>{isLoading ? "Creating ..." : "Create"}</div>
                )}
              </div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
