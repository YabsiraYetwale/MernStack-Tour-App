import { Delete, Edit } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { img_url } from "../../redux/api";
import { deleteTour } from "../../redux/actions/tours";
const UserPost = ({ dashboard }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const excerpt = (str) =>{
    if (str.length > 45){
      str = str.substring(0,45) + "..."
    }
    return str
  }
  
  return (
    <>
        <div
          style={{ display: "flex", position: "relative", borderRadius: "7px" }}
        >
          <img
            src={`${img_url}${dashboard.image}`}
            alt="image"
            style={{
              width: "300px",
              height: "200px",
              borderTopLeftRadius: "7px",
              borderTopRightRadius: "7px",
            }}
          />
          <div style={{ padding: "20px 0px 0px 20px" }}>
            <div
              style={{
                fontWeight: "bolder",
                fontSize: "25px",
                paddingBottom: "10px",
              }}
            >
              {dashboard.title}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#345656",
              }}
            >
              <div style={{ width: "350px" }}>
                {excerpt(dashboard.description)}
                <Link
                  to={`/tour/${dashboard._id}`}
                  style={{ textDecoration: "none" }}
                >
                  Read More
                </Link>
              </div>
              <div style={{ display: "flex", cursor: "pointer" }}>
                <div
                  onClick={() => dispatch(deleteTour(dashboard._id, navigate))}
                >
                  {" "}
                  <Delete style={{ color: "red" }} />
                </div>
                <Link to={`/edit/${dashboard._id}`}>
                  <Edit style={{ color: "blue" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
export default UserPost;
