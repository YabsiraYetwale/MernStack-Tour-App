import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import Tour from "./tour/Tour";
const Tours = () => {
  const { isLoading, tours } = useSelector((state) => state.tours);
  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          {tours?.map((tour, i) => (
            <div key={i}>
              <Tour tour={tour} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default Tours;
