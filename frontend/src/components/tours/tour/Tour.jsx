import { ThumbUpAlt, ThumbUpAltOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { likeTour } from "../../../redux/actions/tours";
import { img_url } from "../../../redux/api";
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          width: "20rem",
          borderRadius: "7px",
        }}
      >
        <Link to={`/tour/${tour?._id}`}>
          {" "}
          <img
            src={`${img_url}${tour.image}`}
            alt="image"
            style={{
              width: "100%",
              height: "250px",
              borderTopLeftRadius: "7px",
              borderTopRightRadius: "7px",
            }}
          />
        </Link>
        <div style={{ padding: "20px 0px 40px 20px" }}>
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              color: "#fff",
              fontWeight: "bolder",
              fontSize: "25px",
            }}
          >
            {tour?.creatorfname} {tour?.creatorlname}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: "8px", color: "#345656" }}>
              #{tour?.tags}
            </div>
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                gap: "8px",
                color: "#0000ff",
                backgroundColor: "transparent",
                border: "none",
              }}
              disabled={!user?.result}
              onClick={() => dispatch(likeTour(tour._id, navigate))}
            >
              {tour?.likes?.find((like) => like === user?.result?._id) &&
              user?.result ? (
                <ThumbUpAlt />
              ) : (
                <ThumbUpAltOutlined />
              )}
              {tour?.likes?.length > 0 &&
              <div>
                  {tour?.likes?.length}&nbsp;
                  {tour?.likes?.length > 1 ? "Likes" : "Like"}             
              </div>
              }
            </button>
          </div>
          <div
            style={{
              fontWeight: "bolder",
              fontSize: "25px",
              padding: "30px 0px 10px 0px",
            }}
          >
            {tour.title}
          </div>
          <div>
            {excerpt(tour.description)}{" "}
            <Link to={`/tour/${tour._id}`} style={{ textDecoration: "none" }}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tour;
