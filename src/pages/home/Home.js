import React, { useState, useEffect } from "react";
import GoogleMap from "../../components/GoogleMap";
import styles from "./home.module.css";

function Home() {
  return (
    <div className="homepage">
      <div className="logo">
        <img
          className="homeimage"
          src="/images/logo.png"
          alt="Be Aware Everywhere logo"
        />
      </div>
      <div>
        <GoogleMap />
        {/* <div id="locationSearch">
        <form id="form" role="location search">
            <input type="search" id="locationsearch" name="location search" placeholder="Search a location here">
            <button type="submit"><i class="fa fa-search"></i></button> 
        </form>
        <a href="">Current location</a>
    </div> */}
      </div>
    </div>
  );
}

export default Home;
