import { AccountBox } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const CustomAccountBox = styled(AccountBox)({
  width: "50px",
  height: "40px",
  color: "#aaa",
});
export const CommentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});
export const CustomBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",
});
export const CustomTypography = styled(Typography)({
  color: "#345690",
  fontWeight: "bolder",
});
export const Form = styled("form")({
  display: "flex",
  gap: "0.5rem",
  position: "relative",
  padding: "20px 0",
});
export const CustomTextField = styled(TextField)({
  width: "100%",
  height: "60px",
});
export const CommentButton = styled(Button)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  right: "10px",
  top: "2rem",
  padding: "5px 20px",
  borderRadius: "20px",
  background: "blue",
  color: "white",
  "&:hover": { background: "blue", opacity: "0.8" },
});
export const CustomCommentBox = styled(Box)({
  display: "flex",
  gap: "0.5rem",
  padding: "20px 0",
});
export const MoreButton = styled(Button)({
  zIndex: 2000,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  right: "-30px",
  top: "0px",
  padding: "5px 20px",
  borderRadius: "20px",
  background: "#351819",
  color: "white",
  "&:hover": { background: "#351819", opacity: "0.8" },
});
