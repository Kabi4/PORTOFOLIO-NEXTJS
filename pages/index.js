import React from "react";
import Layout from "../Components/Layout";

const index = () => {
  return (
    <Layout title="Welcome To NEXT JS">
      Welcome To Home Page Learn Next Js
      <br/>
      <img src="./static/Java-Script.png" alt="Logo" style={{height: "200px",width: "200px",objectFit: "contain"}} />
    </Layout>
  );
};

export default index;
