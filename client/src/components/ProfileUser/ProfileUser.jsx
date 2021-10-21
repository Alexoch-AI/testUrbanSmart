import React from "react";
import { useSelector } from "react-redux";

function ProfileUser() {
  const user = useSelector((state) => state.user);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>{user.login}</h1>
    </div>
  );
}

export default ProfileUser;
