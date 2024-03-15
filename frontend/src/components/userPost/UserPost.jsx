import { Delete, Edit } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { img_url } from "../../redux/api";
import { deleteTour } from "../../redux/actions/tours";
import {
  CustomCardMedia,
  DescriptionBox,
  EditBox,
  SingleBox,
  TitleBox,
} from "./styles";
import { Box, Typography } from "@mui/material";
const UserPost = ({ dashboard }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const excerpt = (str) => {
    if (str?.length > 45) {
      str = str.substring(0, 45) + "...";
    }
    return str;
  };

  return (
    <>
      <SingleBox>
        <CustomCardMedia image={`${img_url}${dashboard.image}`} alt="image" />
        <Box p="20px 0px 0px 20px">
          <TitleBox>{dashboard.title}</TitleBox>
          <DescriptionBox>
            <Typography>
              {excerpt(dashboard.description)}
              <Link
                to={`/tour/${dashboard._id}`}
                style={{ textDecoration: "none" }}
              >
                Read More
              </Link>
            </Typography>
            <EditBox>
              <Box
                onClick={() => dispatch(deleteTour(dashboard._id, navigate))}
              >
                {" "}
                <Delete style={{ color: "red" }} />
              </Box>
              <Link to={`/edit/${dashboard._id}`}>
                <Edit style={{ color: "blue" }} />
              </Link>
            </EditBox>
          </DescriptionBox>
        </Box>
      </SingleBox>
    </>
  );
};
export default UserPost;
