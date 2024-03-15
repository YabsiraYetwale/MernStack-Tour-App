import { TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../redux/actions/auth";
import {
  AuthButton,
  AuthTypography,
  BoxContainer,
  CustomCard,
  CustomForm,
  CustomTextField2,
  NameBox,
} from "./styles/form.styles";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    isSignUp
      ? dispatch(signIn(formData, navigate))
      : dispatch(signUp(formData, navigate));
  };
  return (
    <>
      <BoxContainer>
        <CustomCard>
          <Typography variant="h4">{isSignUp ? "Login" : "SignUp"}</Typography>
          <CustomForm onSubmit={handleSubmit}>
            <NameBox>
              {!isSignUp && (
                <>
                  <CustomTextField2
                    type="text"
                    value={formData.firstname}
                    onChange={(e) =>
                      setformData({ ...formData, firstname: e.target.value })
                    }
                    placeholder="first name"
                  />
                  <CustomTextField2
                    type="text"
                    value={formData.lastname}
                    onChange={(e) =>
                      setformData({ ...formData, lastname: e.target.value })
                    }
                    placeholder="last name"
                  />
                </>
              )}
            </NameBox>
            <TextField
              type="email"
              value={formData.email}
              onChange={(e) =>
                setformData({ ...formData, email: e.target.value })
              }
              placeholder="email"
            />
            <TextField
              type="password"
              value={formData.password}
              onChange={(e) =>
                setformData({ ...formData, password: e.target.value })
              }
              placeholder="password"
            />

            {!isSignUp && (
              <TextField
                type="password"
                value={formData.confirmpassword}
                onChange={(e) =>
                  setformData({ ...formData, confirmpassword: e.target.value })
                }
                placeholder="confirm password"
              />
            )}
            <AuthButton onClick={handleSubmit} variant="outlined">
              {isSignUp ? "Login" : "SignUp"}
            </AuthButton>
            <AuthTypography onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp
                ? "Don't have an account? Sign Up"
                : "Already have an account? Login"}
            </AuthTypography>
          </CustomForm>
        </CustomCard>
      </BoxContainer>
    </>
  );
};

export default Auth;
