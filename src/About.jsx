import React from "react";
import Comman from "./Comman";
import Web from "./Images/img3.png";

const About = () => {
  return (
    <>
      <Comman
        name="Welcom to About page"
        imgsrc={Web}
        visit="/contact"
        btname="Contact Us"
      />
    </>
  );
};
export default About;
