import React from "react";
import Graph from "../../components/Graph";

function Data() {
  return (
    <>
      <div className="page">
        <div className="background">
          <h1 className="tagline">Travel Tips</h1>{" "}
          <p className="abouttext">
            Travelling alone in an unfamiliar place can be daunting as many
            people feel unsafe without company. This page includes a number of
            tips, tricks and travel alternatives which when used can empower the
            public to change their perceptions of personal safety. Perceptions
            of personal safety start with you; an awareness and utilisation of
            tools and information can be both practical and reassuring to help
            you stay and feel safe.
          </p>
          <h5>
            Hover over the images on the left hand side for more information,
            and click the images on the right hand side to take you to some
            useful services.
          </h5>
        </div>
      </div>
      <div className="wrapper" style={{ paddingTop: "10%" }}>
        <Graph />
      </div>
    </>
  );
}

export default Data;
