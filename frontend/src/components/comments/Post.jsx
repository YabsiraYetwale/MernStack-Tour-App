import { Typography } from "@mui/material";
import moment from "moment";
import {
  CommentBox,
  CustomAccountBox,
  CustomBox,
  CustomTypography,
} from "./styles";
const Post = ({ post }) => {
  return (
    <>
      <CustomAccountBox />
      <CommentBox>
        <CustomBox>
          <CustomTypography>{post?.commentator}</CustomTypography>
          <Typography>{moment(post?.commentedAt).fromNow()}</Typography>
        </CustomBox>
        <Typography>{post?.comment}</Typography>
      </CommentBox>
    </>
  );
};

export default Post;
