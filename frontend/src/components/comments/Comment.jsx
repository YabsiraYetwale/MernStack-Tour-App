
import { Box, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import {useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Post from "./Post";
import {
  CustomCommentBox,
  MoreButton,
  CommentButton,
  CustomAccountBox,
  CustomTextField,
  Form,
} from "./styles";
const Comment = () => {
  const { isLoading, tour } = useSelector((state) => state.tours);
  const [isMore, setIsMore] = useState(true);
  const handleMore = () => {
    setIsMore(!isMore);
  };
 
  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box>
          <Box paddingTop="90px">
            <hr />
          </Box>
          <Link to={`/comment/${tour?._id}`} style={{textDecoration:'none'}}>
          <Form >
            <CustomAccountBox />
            <CustomTextField
              label="Join the discussion ..."
              placeholder="Join the discussion ..."
            />
            <CommentButton variant="outlined">
              comment
            </CommentButton>
        </Form>
          </Link>
          <Typography paddingLeft="60px">
            {tour?.comments?.length} comments
          </Typography>
          {isMore
            ? tour?.comments?.slice(0, 5)?.map((iscomment, i) => (
                <CustomCommentBox key={i}>
                  <Post post={iscomment} />
                </CustomCommentBox>
              ))
            : tour?.comments?.map((iscomment, i) => (
                <CustomCommentBox key={i}>
                  <Post post={iscomment} />
                </CustomCommentBox>
              ))}
          {tour?.comments?.length > 5 && (
            <MoreButton onClick={handleMore} variant="outlined">
              {isMore ? "more" : "less"}
            </MoreButton>
          )}
          <Box p="10px 0">
            <hr />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Comment;
