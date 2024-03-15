import { Box } from "@mui/material";
import { BoxContainer, CustomDivider, UserBox } from "./styles";

const NoDashboard = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <>
      <BoxContainer>
        <UserBox>
          {user?.result?.firstname} {user?.result?.lastname}'s Dashboard{" "}
          <CustomDivider />
        </UserBox>
        <Box style={{ color: "red", fontWeight: "bolder", fontSize: "35px" }}>
          You Have No Available Dashboard
        </Box>
      </BoxContainer>
    </>
  );
};

export default NoDashboard;
