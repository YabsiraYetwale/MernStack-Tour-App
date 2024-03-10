import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import RelatedTour from "./RelatedTour";
import { useEffect } from "react";

const RelatedTours = () => {
  const { id } = useParams();
  const { tours } = useSelector((state) => state.tours);
  const relatedTours = tours?.filter((tour) => tour._id !== id);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%" }}>
          <hr
            style={{ height: "3px", background: "#000", marginRight: "20px" }}
          />
        </div>
        <div style={{ width: "20%", fontWeight: "bolder" }}>Related Tours</div>
        <div style={{ width: "100%" }}>
          <hr style={{ height: "3px", background: "#000" }} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContet: "space-between",
          flexWrap: "wrap",
          gap: "9.3rem",
        }}
      >
        {relatedTours?.map((tour, i) => (
          <div key={i}>
            <RelatedTour tour={tour} />
          </div>
        ))}
      </div>
    </>
  );
};
export default RelatedTours;
