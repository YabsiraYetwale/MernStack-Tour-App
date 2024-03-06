import { Box, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link} from 'react-router-dom';
export const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "140px 100px",
});
export const CardBox = styled(Box)({
  display: "flex",
    gap: "150px",
  "@media(max-width:900px)": {
    flexDirection: "column",
    position: "relative",
    right: "70px",
  },
});

export const ImageContainer = styled(Box)({
  display: "flex",
  gap: "40px",
  "@media(max-width:620px)":{
    flexDirection: "column-reverse",
    gap: "10px",
},
});

export const ImageWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  "@media(max-width:620px)":{
    flexDirection: "row",
    width: "400px",
    gap: "10px",
    position:'relative',
    right:'25px',
},
});

export const Image = styled(CardMedia)({
  display: "flex",
  flexDirection: "column",
  padding: "0 0 10px 0",
  width: "70px",
  height: "85px",
  transition: "all 3s",
  "@media(max-width:620px)":{
    flexDirection: "row",
    width: "85px",
    height: "100px",
},
});

export const MainImage = styled(CardMedia)({
  width: "380px",
  height: "350px",
  transition: "all 3s",
  "@media(max-width:620px)":{
    height: "450px",
    position:'relative',
    right:'25px',
},
});

export const TextWrapper = styled(Box)({
  fontWeight: "bolder",
  display: "flex",
  gap: "18px",
});

export const SizeContainer = styled(Box)({
  display: "flex",
  gap: "20px",
});

export const SizeBox = styled(Box)({
  background: "rgba(240, 240,240, 0.5)",
  width: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px 0px",
  border: "solid thin rgba(240, 240,240, 0.5)",
  cursor: "pointer",
  fontWeight: "bolder",
  fontSize: "13px",
});

export const ActionButton = styled(Box)({
  background: "red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px 10px",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "bolder",
});

export const InfoBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  color: "rgb(36, 37, 37)",
});

export const ActionButtonsWrapper = styled(Box)({
  display: "flex",
  gap: "25px",
  paddingLeft: "150px",
  position: "relative",
  top: "-70px",
  "@media(max-width:900px)":{
    position:"absolute",
    top: "580px",
    left:'-50px',
},
  "@media(max-width:620px)":{
    position:"absolute",
    top: "720px",
    right:'100px',
},
  
});

export const StyledButton1 = styled("div")({
  background: "transparent",
  width: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  fontWeight: " bolder",
  fontSize: " 13px",
  border: "solid thin red",
  color: " red",
  padding: "15px 50px",
});
export const StyledLink = styled(Link)({
  textDecoration: "none",
  background: "transparent",
  width: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  fontWeight: " bolder",
  fontSize: " 13px",
  border: "solid thin rgba(63, 209, 50, 0.8)",
  color: " rgba(69, 209, 50, 0.8)",
  padding: "15px 50px",
});

export const StyledButton = styled("div")({
  background: "transparent",
  width: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  fontWeight: "bolder",
  fontSize: "13px",
});