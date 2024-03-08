import { Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../redux/actions/auth";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword:""
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    isSignUp ? dispatch(signIn(formData,navigate)) : dispatch(signUp(formData,navigate));
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.5)",
          }}
        >
          <Typography variant="h4">{isSignUp ? "Login": "SignUp" }</Typography>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "500px",
              padding: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "space-around",
              }}
            >
              {!isSignUp && (
                <>
                  <input
                    type="text"
                    value={formData.firstname}
                    onChange={(e)=>setformData({...formData,firstname:(e.target.value)})}
                    placeholder="first name"
                    style={{ width: "100%", height: "40px" }}
                  />
                  <input
                    type="text"
                    value={formData.lastname}
                    onChange={(e)=>setformData({...formData,lastname:(e.target.value)})}
                    placeholder="last name"
                    style={{ width: "100%", height: "40px" }}
                  />
                </>
              )}
            </div>
            <input
              type="email"
              value={formData.email}
              onChange={(e)=>setformData({...formData,email:(e.target.value)})}
              placeholder="email"
              style={{ height: "40px" }}
            />
              <input
                type="password"
                value={formData.password}
                onChange={(e)=>setformData({...formData,password:(e.target.value)})}
                placeholder="password"
                style={{ height: "40px" }}
              />
            
          { !isSignUp &&(
           <input
              type="password"
              value={formData.confirmpassword}
              onChange={(e)=>setformData({...formData,confirmpassword:(e.target.value)})}
              placeholder="confirm password"
              style={{ height: "40px" }}
            />)}
            <button style={{ cursor: "pointer", height: "40px" }}>
              {isSignUp ? "Login" :"SignUp"  }
            </button>
            <div
              onClick={() => setIsSignUp(!isSignUp)}
              style={{
                cursor: "pointer",
                textAlign: "center",
                color: "#407090",
              }}
            >
              {isSignUp
                ? "Don't have an account ? Sign Up"
                : "Already have an account ?Login"
                }
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Auth;
