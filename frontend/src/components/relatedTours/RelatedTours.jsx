import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import RelatedTour from "./RelatedTour";
import { Box } from "@mui/material";
import {
  CustomBox1,
  CustomBox2,
  DividerBox,
  LeftDivider,
  RelatedTypograpy,
  RightDivider,
} from "./styles";

const RelatedTours = () => {
  const { id } = useParams();
  const { tours } = useSelector((state) => state.tours);
  const relatedTours = tours?.filter((tour) => tour._id !== id);

  return (
    <>
      <CustomBox1>
        <DividerBox>
          <RightDivider />
        </DividerBox>
        <RelatedTypograpy>Related Tours</RelatedTypograpy>
        <DividerBox>
          <LeftDivider />
        </DividerBox>
      </CustomBox1>
      <CustomBox2>
        {relatedTours?.slice(0, 3)?.map((tour, i) => (
          <Box key={i}>
            <RelatedTour tour={tour} />
          </Box>
        ))}
      </CustomBox2>
    </>
  );
};
export default RelatedTours;
