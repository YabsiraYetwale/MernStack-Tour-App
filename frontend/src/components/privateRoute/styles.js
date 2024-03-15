import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const BoxContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  flexWrap: "wrap",
  gap: "2rem",
  width: "100%",
});
export const RedirectTypography = styled(Typography)({
  color: "rgba(44,200,255,1)",
  fontWeight: "bolder",
  fontSize: "35px",
});
