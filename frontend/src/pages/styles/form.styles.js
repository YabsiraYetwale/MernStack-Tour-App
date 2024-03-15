import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const BoxContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  padding: "30px",
});
export const NameBox = styled(Box)({
  display: "flex",
  gap: "1.3rem",
  "@media(max-width:500px)": {
    flexWrap: "wrap",
  },
});
export const CustomCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#ccc",
  width: "60%",
  "@media(max-width:720px)": {
    width: "100%",
  },
});
export const CustomForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "80%",
  padding: "20px",
});
export const CustomTextField = styled("textarea")({
  background: "#ccc",
});
export const CustomTextField2 = styled(TextField)({
  width: "100%",
});
export const CustomButton = styled(Button)({
  background: "#1111ff",
  color: "#fff",
  cursor: "pointer",
  height: "40px",
  "&:hover": { opacity: "0.7", background: "#0000ff" },
});
export const AuthButton = styled(Button)({
  background: "red",
  border: "none",
  color: "#fff",
  cursor: "pointer",
  height: "40px",
  "&:hover": { opacity: "0.7", background: "red",border: "none", },
});
export const AuthTypography = styled(Typography)({
  cursor: "pointer",
  textAlign: "center",
  color: "#407090",
  fontWeight: "bolder",
});
