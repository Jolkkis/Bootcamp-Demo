import React from "react";

import "./Header.css";
import Video from "./Images/video3.mp4"

export default function Header(props) {
    return(
      <header>
        <div id="headerContent">
              <p className = "HeaderP"> Tomi Jolkkonen Bootcamp </p>
              <video poster= {Video} autoplay="true" loop>
              <source src= {Video} type="video/mp4"/>
              </video>
        </div>
        </header>
    )}