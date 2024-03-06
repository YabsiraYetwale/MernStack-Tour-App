import { useEffect, useState } from "react";
import {useLocation, useNavigate } from "react-router-dom";
import {Menu} from '@mui/icons-material';
import {Box,IconButton,MenuItem} from "@mui/material";
import logo from "../../assets/logo.jpg";
import cart from "../../assets/Shopping-Cart.png";
import { LOGOUT } from "../actionTypes";
import { useDispatch } from "react-redux";
import {
  CustomAppBar,
  CustomBox,
  CustomCardMedia,
  CustomTypography,
  CustomMenu,
  CustomIconButton,
  WrapperBox,
  CustomToolbar,
  CustomLink,
  CustomTypographyBox,
  CustomTypographyAddProduct,
  CustomTypographyLogin,
  CustomCardMediaCart,
  CustomTypographyCartCount,
} from "./styles";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user-auth"))
  );
  const [isContentVisible, setIsContentVisible] = useState(false); 
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleToggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  useEffect(() => {
    handleMenuClose();
  }, [location.pathname]);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user-auth")));
  }, [location]);
  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    navigate("/auth");
  };


  return (
    <>
      <CustomAppBar>
        <CustomBox>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <CustomCardMedia image={logo} alt="logo" />
            <CustomTypography>
            CLOTH-SHOP
            </CustomTypography>
          </Box>
          <IconButton   sx={{ display: { xs: "flex", sm: "flex", md:"none",} }} onClick={handleToggleContent}><Menu/></IconButton>
          <WrapperBox  onClick={handleToggleContent} sx={{ display: { xs:isContentVisible ? "flex": "none", sm:isContentVisible ? "flex": "none", md:"flex" } }}>
            <CustomToolbar>
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/catagory/men">Men's</CustomLink>
              <CustomLink to="/catagory/women">Women's</CustomLink>
              <CustomLink to="/catagory/kids">Kid's</CustomLink>
              {user?.result?.role === 'admin' && <CustomLink to="/listProduct">Products</CustomLink>}
            </CustomToolbar>
            <CustomTypographyBox>
            {user?.result && 
            <CustomTypographyAddProduct>
                <CustomLink to="/addproduct">+</CustomLink>
              </CustomTypographyAddProduct>}
              {user?.result ? (
              <CustomTypographyAddProduct onClick={handleMenuOpen}>
                {user?.result?.name?.charAt(0)}
                
              </CustomTypographyAddProduct>
            ):(
              <CustomTypographyLogin>
                <CustomLink to="/auth">Login</CustomLink>
              </CustomTypographyLogin>
            )}
              {user?.result &&
              <CustomLink to={'/cart'}>
                <CustomIconButton>
                <CustomCardMediaCart image={cart} alt="cart" />
                <CustomTypographyCartCount>{user?.result?.cart?.length > 0 ? user?.result?.cart[0]?.totalQuantity : 0}</CustomTypographyCartCount>
                </CustomIconButton>
              </CustomLink>}
            </CustomTypographyBox>
            <CustomMenu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
              vertical: "top",
              horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem> */}
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </CustomMenu>
          </WrapperBox>
        </CustomBox>
      </CustomAppBar>
    </>
  );
};

export default Navbar;

