import React from "react";
import Main from "../Main/Main";
import Contact from "../ContactMe/Contact";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";

const Container = () => {
  return (
    <>
      <Main />
      <Education />
      <Experience/>
      <Contact/>
    </>
  );
};

export default Container;
