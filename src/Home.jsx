import React from "react";
import Comman from "./Comman.jsx";
import Web from "./Images/img4.png";

const Home = () => {
  return (
    <>
      <Comman
        name="Grow your business with"
        imgsrc={Web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};
export default Home;
