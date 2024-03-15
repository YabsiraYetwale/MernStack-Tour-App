import { Box, Card, CardMedia, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const BoxContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "2rem",
  width: "100%",
});
export const UserBox = styled(Box)({
  color: "rgba(44,200,255,1)",
  fontWeight: "bolder",
  fontSize: "35px",
});
export const CustomDivider = styled(Divider)({
  height: "3px",
  background: "#000",
});
export const SingleBox = styled(Card)({
  display: "flex",
  flexWrap: "wrap",
  position: "relative",
  borderRadius: "7px",
});
export const CustomCardMedia = styled(CardMedia)({
  width: "300px",
  height: "200px",
  borderTopLeftRadius: "7px",
  borderTopRightRadius: "7px",
  "@media(max-width:900px)": {
    width: "100%",
  },
});
export const TitleBox = styled(Box)({
  fontWeight: "bolder",
  fontSize: "25px",
  paddingBottom: "10px",
});
export const DescriptionBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  color: "#345656",
});

export const EditBox = styled(Box)({
  display: "flex",
  cursor: "pointer",
});
