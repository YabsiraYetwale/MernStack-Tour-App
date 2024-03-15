import { Box, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTourByUser } from "../../redux/actions/tours";
import { BoxContainer, CustomDivider, UserBox } from "./styles";
import UserPost from "./UserPost";
const UserPosts = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const { isLoading, tours } = useSelector((state) => state.tours);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchTourByUser(user?.result?._id, navigate));
  }, [dispatch]);
  if (isLoading || !tours) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>
      <BoxContainer>
        <UserBox>
          {user?.result?.firstname} {user?.result?.lastname}'s Dashboard{" "}
          <CustomDivider />
        </UserBox>
        {tours.map((dashboard, i) => (
          <Box key={i}>
            <UserPost dashboard={dashboard} />
          </Box>
        ))}
      </BoxContainer>
    </>
  );
};
export default UserPosts;
