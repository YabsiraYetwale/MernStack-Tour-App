import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import Tour from "./tour/Tour";
import { LargerBox } from "./styles";
const Tours = () => {
  const { isLoading, tours } = useSelector((state) => state.tours);
  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <LargerBox>
          {tours?.map((tour, i) => (
            <Box key={i}>
              <Tour tour={tour} />
            </Box>
          ))}
        </LargerBox>
      )}
    </>
  );
};
export default Tours;
