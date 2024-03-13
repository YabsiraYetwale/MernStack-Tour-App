import React from 'react'

const NoDashboard = () => {
    const user = JSON.parse(localStorage.getItem("profile"));

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
          {user?.result?.firstname} {user?.result?.lastname}'s Dashboard{" "}
          <hr style={{ height: "3px", background: "#000" }} />
        </div>
        <div style={{ color: "red",
            fontWeight: "bolder",
            fontSize: "35px",}}>You Have No Available Dashboard</div>

        </div>
    </>
  )
}

export default NoDashboard