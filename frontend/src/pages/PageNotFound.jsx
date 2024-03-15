import { Box } from "@mui/material";
import p404 from "../assets/404.webp";
const PageNotFound = () => {
  return (
    <>
      <Box>
        <img src={p404} alt="404" style={{ width: "100%", height: "100vh" }} />
      </Box>
    </>
  );
};

export default PageNotFound;
