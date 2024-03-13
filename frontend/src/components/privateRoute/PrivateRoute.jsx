import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 && navigate("/auth");
    return ()=> clearInterval(interval);
  }, [count, navigate]);
  return (
    <>
     <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "rgba(44,200,255,1)",
            fontWeight: "bolder",
            fontSize: "35px",
          }}
        >
            Redirecting you in {count} seconds
        </div>

        </div>
    </>
  );
};
const PrivateRoute = ({children}) => {
    const user=JSON.parse(localStorage.getItem('profile'))
  return user?.result ? children : <Redirect/>
};

export default PrivateRoute;
