import { Box, Card, CardMedia, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const CustomCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  width: "20rem",
  borderRadius: "7px",
});
export const CustomCardMedia = styled(CardMedia)({
  width: "100%",
  height: "200px",
  borderTopLeftRadius: "7px",
  borderTopRightRadius: "7px",
});
export const CustomTypography = styled(Typography)({
  fontWeight: "bolder",
  padding: "30px 0px 10px 0px",
});
export const CustomBox1 = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px 0 10px 0",
});
export const RelatedTypograpy = styled(Typography)({
  width: "20%",
  fontWeight: "bolder",
});
export const DividerBox = styled(Box)({
  width: "100%",
});
export const RightDivider = styled(Divider)({
  height: "3px",
  background: "#000",
  marginRight: "20px",
});
export const LeftDivider = styled(Divider)({
  height: "3px",
  background: "#000",
});
export const CustomBox2 = styled(Box)({
  display: "flex",
  justifyContet: "space-between",
  flexWrap: "wrap",
  gap: "9.3rem",
  "@media (max-width: 900px)": {
    padding: "40px",
  },
});
