import React, { useState, useEffect } from "react";
import GoogleMap from "../../components/GoogleMap";
import styles from "./home.module.css";

function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <GoogleMap />
      {/* <div id="locationSearch">
        <form id="form" role="location search">
            <input type="search" id="locationsearch" name="location search" placeholder="Search a location here">
            <button type="submit"><i class="fa fa-search"></i></button> 
        </form>
        <a href="">Current location</a>
    </div> */}
    </div>
  );
}

export default Home;
