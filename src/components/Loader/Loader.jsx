import React from "react";
import { FadeLoader } from "react-spinners";
function Loader() {
  return (
    <div
      style={{
        display: "flex",
        height: "50vh",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <FadeLoader color="#36d7b7" />
    </div>
  );
}

export default Loader;
