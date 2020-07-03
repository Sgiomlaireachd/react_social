import React from "react";
import preloader from "../../../assets/images/loading.gif";
import "./Preloader.css";

const Preloader = (props) => {
  return (
    <div className="preloader">
      <img className="preloader__img" src={preloader} alt="Loading..." />
    </div>
  );
};

export default Preloader;
