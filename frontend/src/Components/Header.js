import React from "react";

import "./Css/Header.css";
import Video from "./Images/video4.mp4"

export default function Header(props) {
    return(
      <header>
        <div  id="headerContent">
              <p className = "HeaderP"> Tomi Jolkkonen Portfolio</p>
              <video poster= {Video} autoplay="true" loop>
              <source src= {Video} type="video/mp4"/>
              </video>
        </div>
        </header>
    )}