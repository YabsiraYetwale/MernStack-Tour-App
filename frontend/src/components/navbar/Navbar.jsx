import { Search } from "@mui/icons-material";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { fetchTourBySearch } from "../../redux/actions/tours";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [search, setSearch] = useState("");
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
    } 
    else if(!search) {
      navigate("/");
    }
    setSearch("");
  };
  return (
    <>
      <AppBar sx={{ background: "#eee" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <Typography variant="h4">
            <Link
              to="/"
              style={{
                color: "rgba(0,0,0,0.5)",
                fontWeight: "bolder",
                textDecoration: "none",
              }}
            >
              Tour
            </Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "rgba(44,200,255,1)", fontWeight: "bolder" }}
          >
            {user?.result?.firstname} {user?.result?.lastname}
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
            {user?.result ? (
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "20px",
                  color: "#eee",
                  background: "red",
                  padding: "5px 30px",
                  cursor: "pointer",
                  "&:hover": { opacity: "0.5", background: "red" },
                }}
                onClick={logoutUser}
              >
                Logout
              </Button>
            ) : (
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
            )}
            <form
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Search Tour"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ height: "30px", border: "none", padding: "0 10px" }}
              />
              <button>
                <Search style={{ cursor: "pointer" }} />
              </button>
            </form>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
