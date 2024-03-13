import { AccountBox, Warning, MailOutline } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { commentTour} from "../../redux/actions/tours";
const Comment = () => {
  const { isLoading,tour } = useSelector((state) => state.tours);
  const [formData, setFormData] = useState({ comment: [] });
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const handleComment = (e) => {
    e.preventDefault();
    dispatch(
      commentTour(
        id,
        { ...formData, commentator: user?.result?.firstname },
        navigate
      )
    );
  };
  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "62rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <div>{tour?.comments?.length} comments</div>
              <div>tour</div>
              <div>privacy policy</div>
            </div>
            <div>1 Vishal</div>
          </div>
          <div style={{ padding: "10px 0" }}>
            <hr />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "62rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <div>favorite {tour?.likes?.length}</div>
              <div>telagram</div>
              <div>face</div>
            </div>
            <div>Sort by Best</div>
          </div>
          <form
            onSubmit={handleComment}
            style={{ display: "flex", gap: "0.5rem",position:"relative", padding: "20px 0" }}
          >
            <AccountBox
              style={{ width: "50px", height: "40px", color: "#aaa" }}
            />
            <input
              value={formData.comment}
              onChange={(e) =>
                setFormData({ ...formData, comment: e.target.value })
              }
              placeholder="Join the discussion ..."
              style={{ width: "100%", height: "60px" }}
            />
            <Button
            onClick={handleComment}
            variant="outlined"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: "10px",
                top: "2rem",
                padding:"5px 20px",
                borderRadius:"20px",
                background:"blue",
                color: "white",
                "&:hover":{background:"blue",opacity:"0.8"}
              }}
            >
              comment
            </Button>
          </form>
          {tour?.comments?.map((iscomment, i) => (
            <div
              key={i}
              style={{ display: "flex", gap: "0.5rem", padding: "20px 0" }}
            >
              <AccountBox
                style={{ width: "50px", height: "40px", color: "#aaa" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <div style={{ color: "#345690", fontWeight: "bolder" }}>
                    {iscomment?.commentator}
                  </div>

                  <div>{moment(iscomment?.commentedAt).fromNow()}</div>
                </div>
                <div>{iscomment.comment}</div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>|</div>
                  <div>reply</div>
                  <div>{"share>"}</div>
                </div>
              </div>
            </div>
          ))}
          <div style={{ padding: "10px 0" }}>
            <hr />
          </div>
          <div style={{ display: "flex", gap: "45rem" }}>
            <div style={{ display: "flex", gap: "1rem" }}>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <MailOutline />
                <div>Subscribe</div>
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <MailOutline />
                <div style={{ width: "150px" }}>Add Disqus to your site</div>
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <Warning />
                <div style={{ width: "150px" }}>Do not Sell My data</div>
              </div>
            </div>
            <div style={{ fontSize: "18px" }}>DISQUS</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Comment;
