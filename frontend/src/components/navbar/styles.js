import { Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

export const CustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-around",
});
export const Logo = styled(Link)({
  color: "rgba(0,0,0,0.5)",
  fontWeight: "bolder",
  textDecoration: "none",
});
export const LargeBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  "@media(max-width:900px)": {
    position: "relative",
    top: "40px",
    left: "-205px",
    width: "400px",
    flexDirection: "column",
    justifyContent: "start",
  },
  "@media(max-width:380px)": {
    top: "90px",
  },
});
export const InnerBox = styled(Box)({
  display: "flex",
  justifyContent: "space-aroud",
  gap: "2rem",
  cursor: "pointer",
  "@media(max-width:1200px)": {
    position: "absolute",
    top: "65px",
    left: "0",
    alignItems: "center",
    background: "#ddd",
    width: "400px",
    height: "80vh",
    flexDirection: "column",
    paddingTop: "50px",
  },
  "@media(max-width:900px)": {
    top: "0px",
  },
});
export const UserTypography = styled(Typography)({
  "@media(max-width:900px)": {
    position: "absolute",
    width: "150px",
    left: "160px",
    zIndex: 2000,
  },
});
export const CustomTypography = styled(Typography)({
  "&:hover": { opacity: "0.5" },
});
export const CustomLink = styled(Link)({
  color: "rgba(0,0,0,0.5)",
  textDecoration: "none",
});
export const CustomButton = styled(Button)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "20px",
  color: "#eee",
  background: "red",
  padding: "5px 30px",
  cursor: "pointer",
  "&:hover": { opacity: "0.5", background: "red" },
  "@media(max-width:900px)": {
    position: "absolute",
    top: "220px",
    left: "140px",
  },
});
export const LoginLink = styled(Link)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "20px",
  color: "#eee",
  background: "blue",
  padding: "5px 30px",
  textDecoration: "none",
  "@media(max-width:900px)": {
    position: "absolute",
    top: "220px",
    left: "140px",
  },
});
export const Form = styled("form")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const CustomInput = styled("input")({
  height: "30px",
  border: "none",
  padding: "0 10px",
});
