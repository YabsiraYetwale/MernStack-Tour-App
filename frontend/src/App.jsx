import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Noresult from "./components/noresult/Noresult";
import Auth from "./pages/Auth";
import Detail from "./pages/Detail";
import Dashboard from "./pages/Dashbord";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/navbar/Navbar";
import { Box } from "@mui/material";
import Form from "./pages/Form";
import NoDashboard from "./components/userPost/NoDashboard";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Box sx={{ paddingTop: "90px" }}>
        <Routes>
          <Route path="/" Component={() => <Navigate to={"/tours"} />} />
          <Route path="/tours" element={<Home />} />
          <Route path="/tours/search" element={<Home />} />
          <Route path="/tours/search/no_result" element={<Noresult />} />
          <Route path="/auth" element={<Auth/>} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/no_result"
            element={
              <PrivateRoute>
                <NoDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/add/tour"
            element={
              <PrivateRoute>
                <Form />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <PrivateRoute>
                <Form />
              </PrivateRoute>
            }
          />
          <Route path="/tour/:id" element={<Detail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
