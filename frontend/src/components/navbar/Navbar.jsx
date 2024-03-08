import { Search } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar sx={{ background: "#eee" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <Typography variant="h4">
            <Link
              to="/"
              style={{ color: "rgba(0,0,0,0.5)",fontWeight:'bolder',textDecoration: "none" }}
            >
              Tour
            </Link>
          </Typography>
          <Typography variant="h6" sx={{color: "rgba(44,200,255,1)",fontWeight:'bolder' }}>
            Yabsira Yetwale
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-aroud",
                gap: "2rem",
                cursor: "pointer",
              }}
            >
              <Typography sx={{ "&:hover": { opacity: "0.5" } }}>
                <Link
                  to="/"
                  style={{ color: "rgba(0,0,0,0.5)", textDecoration: "none" }}
                >
                  Home
                </Link>
              </Typography>
              <Typography sx={{ "&:hover": { opacity: "0.5" } }}>
                <Link
                  to="/add/tour"
                  style={{ color: "rgba(0,0,0,0.5)", textDecoration: "none" }}
                >
                  {" "}
                  Add Tour
                </Link>
              </Typography>
              <Typography sx={{ "&:hover": { opacity: "0.5" } }}>
                <Link
                  to="/dashboard"
                  style={{ color: "rgba(0,0,0,0.5)", textDecoration: "none" }}
                >
                  {" "}
                  Dashboard
                </Link>
              </Typography>
            </Box>
            {/* {
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "20px",
                  color: "#eee",
                  background: "red",
                  padding: "5px 30px",
                  cursor: "pointer",
                  "&:hover": { opacity: "0.5" },
                }}
              >
                Logout
              </Typography>
            } */}
            <Typography sx={{ "&:hover": { opacity: "0.5" } }}>
              <Link
                to="/auth"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "20px",
                  color: "#eee",
                  background: "blue",
                  padding: "5px 30px",
                  textDecoration: "none",
                }}
              >
                {" "}
                Login
              </Link>
            </Typography>
            <form
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                placeholder="Search Tour"
                style={{ height: "30px", border: "none", padding: "0 10px" }}
              />
              <Search style={{ cursor: "pointer" }} />
            </form>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
