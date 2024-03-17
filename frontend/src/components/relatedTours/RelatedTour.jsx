import { CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomCard, CustomCardMedia, CustomTypography } from "./styles";
const RelatedTour = ({ tour }) => {
  return (
    <>
      <CustomCard>
        <Link to={`/tour/${tour._id}`}>
          {" "}
          <CustomCardMedia image={tour?.image} alt="image" />
        </Link>
        <CardContent>
          <Typography>#{tour?.tags}</Typography>
          <CustomTypography>{tour.title}</CustomTypography>
        </CardContent>
      </CustomCard>
    </>
  );
};
export default RelatedTour;
