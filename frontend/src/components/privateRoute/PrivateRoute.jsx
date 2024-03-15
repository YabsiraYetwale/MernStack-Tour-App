import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BoxContainer, RedirectTypography } from "./styles";

const Redirect = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 && navigate("/auth");
    return () => clearInterval(interval);
  }, [count, navigate]);
  return (
    <>
      <BoxContainer>
        <RedirectTypography>
          Redirecting you in {count} seconds
        </RedirectTypography>
      </BoxContainer>
    </>
  );
};

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return user?.result ? children : <Redirect />;
};

export default PrivateRoute;
