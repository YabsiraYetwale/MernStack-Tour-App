import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const BoxContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  borderRadius: "7px",
  padding: "0 40px 20px 40px",
  "@media (max-width: 520px)": {
    padding: "0",
  },
});
export const CustomCardMedia = styled("img")({
  width: "100%",
  height: "400px",
  borderTopLeftRadius: "7px",
  borderTopRightRadius: "7px",
});
export const CustomTypography = styled(Typography)({
  fontWeight: "bolder",
  fontSize: "25px",
  padding: "30px 0px 10px 0px",
  textAlign: "center",
});
