import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography, TextField, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { createTour, updateTour, fetchTour } from "../redux/actions/tours";
import {
  BoxContainer,
  CustomButton,
  CustomCard,
  CustomForm,
  CustomTextField,
} from "./styles/form.styles";
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
      <BoxContainer>
        <CustomCard>
          <Typography variant="h4">{id ? "Edit Tour" : "Add Tour"}</Typography>
          <CustomForm onSubmit={handleSubmit}>
            <TextField
              type="text"
              placeholder="title"
              value={inputFiles?.title}
              onChange={(e) =>
                setInputFiles({ ...inputFiles, title: e.target.value })
              }
            />
            <CustomTextField
              cols="30"
              rows="10"
              placeholder="description"
              value={inputFiles?.description}
              onChange={(e) =>
                setInputFiles({ ...inputFiles, description: e.target.value })
              }
            />
            <TextField
              type="text"
              value={inputFiles?.tags?.join("  #")}
              onChange={(e) =>
                setInputFiles({
                  ...inputFiles,
                  tags: e.target.value.split(","),
                })
              }
              placeholder="tags (separated by comma ,)"
            />
            <input
              type="file"
              onChange={(e) =>
                setInputFiles({ ...inputFiles, image: e.target.files[0] })
              }
            />
            <CustomButton onClick={handleSubmit}>
              <Box>
                {id ? (
                  <Typography>
                    {isLoading ? "UPDATING ..." : "UPDATE"}
                  </Typography>
                ) : (
                  <Typography>
                    {isLoading ? "CREATING ..." : "CREATE"}
                  </Typography>
                )}
              </Box>
            </CustomButton>
          </CustomForm>
        </CustomCard>
      </BoxContainer>
    </>
  );
};

export default Form;
