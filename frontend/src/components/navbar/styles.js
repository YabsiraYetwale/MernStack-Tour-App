import { styled } from '@mui/material/styles';
import { AppBar, Box,Menu as MenuM,IconButton, Typography,Toolbar, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
export const CustomAppBar = styled(AppBar)({
    background:'#fff',
    display:'flex',
    justifyContent:'space-around',
    boxShadow:'1px 1px 1px 0px rgba(45,45,45,0.5)',
    padding:'10px 0',
    margin:'0',
    position:'fixed',
    top:'0',
    zIndex:'5',
});

export const CustomBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  flexGrow: 1,
  zIndex: 5,
});

export const CustomCardMedia = styled(CardMedia)({
  width: '60px',
  height: '40px',
});

export const CustomTypography = styled(Typography)({
  fontWeight:"bolder",
  color:"#578191",
  fontSize:"30px"
});

export const CustomMenu = styled(MenuM)({
  display: 'flex',
  position: 'absolute',
  top: '65px',
  left:'10px',
});

export const CustomIconButton = styled(IconButton)({
  display: {
    xs: 'flex',
    sm: 'flex',
    md: 'none',
  },
});

export const WrapperBox = styled(Toolbar)({
    display: "Flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    "@media(max-width:900px)":{
    position: 'absolute',
    left: '0px',
    top: '60px',
    flexDirection: 'column-reverse',
    background:'#fff', 
    height: '80vh',
    paddingBottom:'20px',   
    gap: "40px",
    }
});
export const CustomToolbar = styled(Toolbar)({
    display: "Flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    "@media(max-width:900px)":{
      flexDirection: 'column',
      position: 'relative',
      top: '-80px',
      }
});

export const CustomLink = styled(Link)({
  textDecoration: 'none',
  color: '#444',
});

export const CustomTypographyBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
      "@media(max-width:900px)":{
    position: 'relative',
    top: '-80px',
    }
});
export const CustomTypographyAddProduct = styled(Typography)({
  cursor: 'pointer',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '10px 20px',
  borderRadius: '50%',
  background: 'linear-gradient(180deg,#8d828d,#8b8888,#ac8989 60%)',
  color: '#fff',
});

export const CustomTypographyLogin = styled(Typography)({
  background: 'linear-gradient(180deg,#8d828d,#8b8888,#ac8989 60%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 40px',
  color: '#fff',
  cursor: 'pointer',
  fontWeight: 'bolder',
  borderRadius: '20px',
  "@media(max-width:900px)":{
    padding: '10px 20px',

  }
});

export const CustomCardMediaCart = styled(CardMedia)({
  width: '40px',
  height: '40px',
  borderRadius: '40px',
});

export const CustomTypographyCartCount = styled(Typography)({
  position: 'absolute',
  left: '33px',
  top: '7px',
  width: '24px',
  height: '24px',
  borderRadius: '100%',
  background: 'red',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});