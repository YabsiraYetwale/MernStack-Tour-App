import { Box, CardContent, Typography } from "@mui/material";
import { ThumbUpAlt, ThumbUpAltOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { likeTour } from "../../../redux/actions/tours";
import {
  BoxContainer,
  CreatorTypography,
  CustomCard,
  CustomCardMedia,
  LikeButton,
  TagTypography,
  TitleTypography,
} from "../styles";
const Tour = ({ tour }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"));
  const excerpt = (str) => {
    if (str?.length > 45) {
      str = str.substring(0, 45) + "...";
    }
    return str;
  };
  return (
    <>
      <CustomCard>
        <Link to={`/tour/${tour?._id}`}>
          {" "}
          <CustomCardMedia image={tour?.image} alt="image" />
        </Link>
        <CardContent>
          <CreatorTypography>
            {tour?.creatorfname} {tour?.creatorlname}
          </CreatorTypography>
          <BoxContainer>
            <TagTypography>#{tour?.tags}</TagTypography>
            <LikeButton
              disabled={!user?.result}
              onClick={() => dispatch(likeTour(tour._id, navigate))}
            >
              {tour?.likes?.find((like) => like === user?.result?._id) &&
              user?.result ? (
                <ThumbUpAlt />
              ) : (
                <ThumbUpAltOutlined />
              )}
              {tour?.likes?.length > 0 && (
                <Box>
                  {tour?.likes?.length}&nbsp;
                  {tour?.likes?.length > 1 ? "Likes" : "Like"}
                </Box>
              )}
            </LikeButton>
          </BoxContainer>
          <TitleTypography>{tour.title}</TitleTypography>
          <Typography>
            {excerpt(tour.description)}{" "}
            <Link to={`/tour/${tour._id}`} style={{ textDecoration: "none" }}>
              Read More
            </Link>
          </Typography>
        </CardContent>
      </CustomCard>
    </>
  );
};
export default Tour;
