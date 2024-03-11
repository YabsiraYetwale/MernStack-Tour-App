import { ThumbUpAlt } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { img_url } from "../../../redux/api";
const Tour = ({ tour }) => {
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                color: "#0000ff",
              }}
            >
              <ThumbUpAlt />
              {tour.likes} Likes
            </div>
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
            {tour.description}{" "}
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
