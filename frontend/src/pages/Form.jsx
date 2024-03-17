import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography, TextField, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import FileBase from 'react-file-base64'
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
      dispatch(updateTour(id, {...inputFiles,creatorfname: user?.result?.firstname}, navigate));
    } else {
      dispatch(createTour({...inputFiles,creatorlname:user?.result?.lastname}, navigate));
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
            <FileBase type='file' onDone={({base64})=> setInputFiles({...inputFiles, image:base64})} />
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
