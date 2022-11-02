import React from "react";
import { Link } from "react-router-dom";
import "./safety.css";

function Safety() {
  return (
    <div className="page">
      <div className="background">
        <h1>Travel Tips</h1>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea
          mollitia molestiae vero, nihil enim soluta quisquam vel laudantium
          voluptate ducimus eum inventore eos, aliquam ipsa a pariatur sunt
          perferendis?
          <br /> Stay together. ... Be aware of your surroundings. ... Guard
          your drinks. ... Recognize the signs of being drugged. ... Drink
          responsibly. ... Watch what you post on social media. ... Download a
          personal safety app. ... Use ridesharing with caution.
          <br />
          1. If walking by yourself, get off your cell phone. A lot of people
          think that being on the phone is safe because the person on the other
          line can call 911, but that rarely works out. Chatting can distract
          you; it's better to be aware of your surroundings. That said… 2. If
          walking by yourself, hold your cell phone and be ready to make an
          emergency call. Many phones now have a button on the screen to dial
          911 immediately. Go one step further and preset one of the buttons on
          your phone to call the emergency number. 3. Look underneath your car
          before approaching it in a parking garage or lot at night 5. You
          return to your car and it has a flat tire. Back away. Return to
          wherever you came from (restaurant, store, etc) and call for help.
          Once assistance arrives, approach your car. If someone comes up to you
          (even if they are a woman) and wants to offer help, politely say, "No
          thank you." If a man, he could be a predator. If a woman, she could be
          the lurer. 17. When going out with your girlfriends, decide beforehand
          that you will stick together. Do not let your friend go off alone with
          a guy. 20. Don't check-in on Foursquare or Facebook when you arrive
          somewhere. Instead, check in as you leave. This way no one will be
          able to digitally stalk you and know your every move or when you're
          not home. Along the same lines, avoid tweeting or Facebooking from
          vacation, especially if your account is public, as it's a way of
          letting the world know that your home is unoccupied.
        </p>
        <div className="safetytips">
          <div className="imagescontainer">
            <div className="individualcontainer">
              <img src="/images/walkalonegood.jpg" className="image" />
              <div className="middle">
                <div className="text">Hello</div>
              </div>
            </div>
            {/* - individual container end */}
            <div className="individualcontainer">
              <img src="/images/walkwithfriends.jpg" className="image" />
              <div className="middle">
                <div className="text">Hello</div>
              </div>
            </div>
            {/* - individual container end */}
            <div className="individualcontainer">
              <img src="/images/cctvbuilding.jpg" className="image" />
              <div className="middle">
                <div className="text">Hello</div>
              </div>
            </div>
            {/* - individual container end */}
            <div className="individualcontainer">
              <img src="/images/womanonphonenight.jpg" className="image" />
              <div className="middle">
                <div className="text">Hello</div>
              </div>
            </div>
            {/* - individual container end */}
          </div>
          {/* - images container end */}
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
            {/* - individual container end */}
          </div>
        </div>
        {/* - satey tips container end */}
      </div>
    </div>
  );
}

export default Safety;
