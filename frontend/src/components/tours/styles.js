import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
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
  height: "250px",
  borderTopLeftRadius: "7px",
  borderTopRightRadius: "7px",
});
export const CreatorTypography = styled(Typography)({
  position: "absolute",
  top: "20px",
  left: "20px",
  color: "#fff",
  fontWeight: "bolder",
  fontSize: "25px",
});
export const TagTypography = styled(Typography)({
  display: "flex",
  gap: "8px",
  color: "#345656",
});
export const BoxContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});
export const LikeButton = styled(Button)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  gap: "8px",
  color: "#0000ff",
  background: "transparent",
  border: "none",
  "&:hover": { background: "transparent" },
});
export const TitleTypography = styled(Typography)({
  fontWeight: "bolder",
  fontSize: "19px",
  padding: "30px 0px 10px 0px",
});
export const LargerBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "2rem",
});
