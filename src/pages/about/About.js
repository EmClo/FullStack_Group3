import React from "react";
import "../about/about.css"

function About() {
  return (
    <div className="page">
      <h1>About</h1>{" "}
      <div className="background">
        <div>
          <p class="tagline"><span>Make more informed lifestyle,</span><span> safety and travel decisions.</span></p>
          <p>Be Aware Everywhere gives the public access to specific location based crime statistics in an effort to empower users with the necessary information to make safer choices.</p>
          </div>
          <div class="aboutcontent">
            <h2>Who We Are</h2>
            <h3>Four women creating an app for women, as part of our Code First Girls Fullstack specification - sponsored by BAE systems. Discussion of shared experiences and what sort of platform would be useful to us, a shared experience of the sense of unease in an unfamiliar place or when travelling alone was established. </h3>
          </div>
          <div>       
          <div class="aboutcontent">
            <h2>The Problem</h2>
            <h3>Research led to the discovery that these kinds of poor perceptions of personal safety were shared by the public With 27% of women and 16% of men reporting  experiences and feelings of reduced safety and general unease when walking alone. These poor perceptions of personal safety are unacceptable, and the solution resides in the public having access to information to empower cautious decision-making when travelling in unfamiliar areas.</h3>
          </div>
          <div class="aboutcontent">
            <h2>The Solution</h2>
            <h3>Our platform includes location based crime statistics, where we hope high crime rates will encourage users to stay alert and take alternative routes or transport. We will also inform users of possible transport alternatives and tips to keep safe. Although the motivation behind this platform stemmed from wanting to improve public personal safety when travelling, the scope for other potential users to make more informed decisions relating to personal property/potential investments has also been realised.</h3>
          </div> 
          </div>
      </div>
    </div>
  );
}

export default About;
