import React from "react";
import Graph from "../../components/Graph";
import PoliceForces from "../../components/GraphDropDown";

function Data() {
  return (
    <>
      <div className="page">
        <div className="background" style={{ padding: "1% 3%" }}>
          <h1 className="tagline" style={{ padding: "2% 5% 0% 5%" }}>
            Crime Report Statistics by Police Force
          </h1>
          <p className="abouttext" style={{ padding: "1% 5% 0% 5%" }}>
            Use the selection box below to gain a more indepth understanding of
            the level of crime in the area you live in or a particular area in
            the UK. <br />
            The crime statistics presented are categorised by the following:
            <ul style={{ padding: "0% 20%" }}>
              <li>Violent Crimes and Sexual Offences</li>
              <li>Burglary</li>
              <li>Criminal Damage</li>
              <li>Theft from Person</li>
              <li>Antisocial Behaviour</li>
            </ul>
            The current data selection is from February 2022 - September 2022,
            this is due to the availability of data at the time this web
            application was developed.
          </p>
          <h5 style={{ padding: "1% 5% 0% 5%", margin: "0%" }}>
            Use the selection box below to select your local police force
          </h5>
          <div>
            <PoliceForces />
          </div>
        </div>
      </div>
    </>
  );
}

export default Data;
