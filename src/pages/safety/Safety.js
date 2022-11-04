import React from "react";
import { Link } from "react-router-dom";
import "../safety/safety.css";
import "../about/about.css";
function Safety() {
  return (
    <div className="page">
      <div className="background">
        <h1 className="tagline">Travel Tips</h1>{" "}
        <div>
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
        <div className="safetytips">
          <div className="imagescontainer">
            <div className="individualcontainer">
              <img src="/images/walkalonegood.jpg" className="image" />
              <div className="middle">
                <div className="text">
                  If you are walking in an area you are not familiar with,
                  pre-plan your route to avoid getting lost. Where possible walk
                  through busy, well-lit areas. Places of business will often
                  have well lit fronts and walkways.
                </div>
              </div>
            </div>
            {/* - individual container end */}
            <div className="individualcontainer">
              <img src="/images/cctv.jpg" className="image" />
              <div className="middle">
                <div className="text">
                  Always inform someone else of your plans, including your
                  route, final destination and approximate time that you intend
                  to arrive. Many smartphone apps include options to share
                  location, consider using this with trusted friends and family.
                </div>
              </div>
            </div>
            <div className="individualcontainer">
              <img src="/images/usingphone.jpg" className="image" />
              <div className="middle">
                <div className="text">
                  Always Carry Your Phone with You - keep it charged, it can be
                  your lifeline. If you see something suspicious or if you feel
                  threatened, alert the authorities. However, do not let your
                  phone be a distraction, you should remain observant of your
                  surroundings.
                </div>
              </div>
              {/* - individual container end */}
            </div>
            <div className="individualcontainer">
              <img src="/images/crossingroad.jpg" className="image" />
              <div className="middle">
                <div className="text">
                  If you feel like you are being followed, a good test is to
                  cross the street at the next possible junction. If the person
                  does the same, remain calm, identify your options, try to
                  enter a business to ask for help/seek refuge or contact the
                  authorities.
                </div>
              </div>
            </div>
            {/* - individual container end */}
            <div className="individualcontainer">
              <img src="/images/trafficlights.jpg" className="image" />
              <div className="middle">
                <div className="text">
                  Most importantly, Trust Your Gut - If you feel safe in your
                  surroundings continue your travel with the above tips in mind.
                  However, If you feel unsafe for any reason, trust your
                  instincts and look for an alternative to walking alone (See
                  right).
                </div>
              </div>
            </div>
            {/* - individual container end */}
          </div>
          <div className="travelAlternatives">
            {/* - individual container end */}
            <div className="individualcontainer">
              <a
                href="https://https://www.traveline.info/.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="images/travelinelogo.png"
                  alt="websitename"
                  className="companylogo"
                  title="Traveline"
                />
              </a>
              <p style={{ width: "50%", padding: "0%" }}>
                Plan your journey from door to door across Great Britain, see
                the different ways you could travel, and view your journey on a
                map
              </p>
            </div>
            <div className="individualcontainer">
              <a
                href="https://www.uber.com/global/en/price-estimate/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="images/uberlogo.png"
                  alt="websitename"
                  className="companylogo"
                  title="Uber"
                />
              </a>
              <p style={{ width: "50%", padding: "0%" }}>Uber...</p>
            </div>
            {/* - individual container end */}
            <div className="individualcontainer">
              <a
                href="https://www.thomsonlocal.com/taxis"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/thomsonlocallogo.png"
                  alt="websitename"
                  className="companylogo"
                  title="Thomson Local"
                />
              </a>
              <p style={{ width: "50%", padding: "0%" }}>
                The ultimate A-Z taxi guide. Search local taxi companies and
                their rreviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Safety;
