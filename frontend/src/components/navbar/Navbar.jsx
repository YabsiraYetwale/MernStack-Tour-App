import { Search, Menu } from "@mui/icons-material";
import { AppBar, Box, Button, Typography } from "@mui/material";
import {
  CustomToolbar,
  Logo,
  LargeBox,
  UserTypography,
  InnerBox,
  CustomLink,
  CustomTypography,
  CustomButton,
  LoginLink,
  Form,
  CustomInput,
} from "./styles";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchTourBySearch } from "../../redux/actions/tours";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [search, setSearch] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const logoutUser = () => {
    dispatch({ type: "LOGOUT", navigate });
    navigate("/auth");
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(fetchTourBySearch(search, navigate));
    } else if (!search) {
      navigate("/");
    }
    setSearch("");
  };
  const handleClick = () => {
    setIsMobile(!isMobile);
  };

  return (
    <>
      <AppBar sx={{ background: "#eee" }}>
        <CustomToolbar>
          <Typography variant="h4" sx={{ display: "flex" }}>
            <Button
              sx={{ display: { xs: "block", lg: "none" } }}
              onClick={handleClick}
            >
              <Menu />
            </Button>
            <Logo to="/">Tour</Logo>
          </Typography>
          <LargeBox onClick={handleClick}>
            <UserTypography
              sx={{
                display: {
                  xs: !isMobile ? "none" : "flex",
                  sm: !isMobile ? "none" : "flex",
                  md: "flex",
                },
              }}
              variant="h6"
              color="rgba(44,200,255,1)"
              fontWeight="bolder"
            >
              {user?.result?.firstname} {user?.result?.lastname}
            </UserTypography>
            {
              <Box
                sx={{
                  display: {
                    xs: !isMobile ? "none" : "flex",
                    sm: !isMobile ? "none" : "flex",
                    md: !isMobile ? "none" : "flex",
                    lg: "flex",
                  },
                }}
              >
                <InnerBox>
                  <CustomTypography>
                    <CustomLink to="/">Home</CustomLink>
                  </CustomTypography>
                  <CustomTypography>
                    <CustomLink to="/add/tour"> Add Tour</CustomLink>
                  </CustomTypography>
                  <CustomTypography>
                    <CustomLink to="/dashboard"> Dashboard</CustomLink>
                  </CustomTypography>
                </InnerBox>
              </Box>
            }
            {
              <Box
                sx={{
                  display: {
                    xs: !isMobile ? "none" : "flex",
                    sm: !isMobile ? "none" : "flex",
                    md: "flex",
                  },
                }}
              >
                {user?.result ? (
                  <CustomButton onClick={logoutUser}>Logout</CustomButton>
                ) : (
                  <CustomTypography>
                    <LoginLink to="/auth"> Login</LoginLink>
                  </CustomTypography>
                )}
              </Box>
            }
          </LargeBox>
          <Form onSubmit={handleSubmit}>
            <CustomInput
              type="text"
              placeholder="Search Tour"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button>
              <Search style={{ cursor: "pointer" }} />
            </button>
          </Form>
        </CustomToolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
