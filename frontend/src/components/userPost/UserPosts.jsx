import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTourByUser, fetchTours } from "../../redux/actions/tours";
import UserPost from "./UserPost";
const UserPosts = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const { isLoading, tours } = useSelector((state) => state.tours);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchTourByUser(user?.result?._id,navigate));
  }, [dispatch]);
  if (isLoading || !tours) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
          width: "100%",
        }}
      >
       
      <div
          style={{
            color: "rgba(44,200,255,1)",
            fontWeight: "bolder",
            fontSize: "35px",
          }}
        >
          {user?.result?.firstname} {user?.result?.lastname}'s Dashboard{" "}
          <hr style={{ height: "3px", background: "#000" }} />
        </div>

        {tours.map((dashboard, i) => (
          <div key={i}>
            <UserPost dashboard={dashboard} />
          </div>
        ))}
      </div>
    </>
  );
};
export default UserPosts;
