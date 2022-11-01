import React from "react";
import walkingalonegood from "../../components/images/walkalonegood.jpg";
import cctv from "../../components/images/cctv.jpg";

function Safety() {
  return (
    <div className="page">
      <div className="background">
        <h1>Travel Tips</h1>{" "}
        <div className="safetytips">
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
            think that being on the phone is safe because the person on the
            other line can call 911, but that rarely works out. Chatting can
            distract you; it's better to be aware of your surroundings. That
            said… 2. If walking by yourself, hold your cell phone and be ready
            to make an emergency call. Many phones now have a button on the
            screen to dial 911 immediately. Go one step further and preset one
            of the buttons on your phone to call the emergency number. 3. Look
            underneath your car before approaching it in a parking garage or lot
            at night 5. You return to your car and it has a flat tire. Back
            away. Return to wherever you came from (restaurant, store, etc) and
            call for help. Once assistance arrives, approach your car. If
            someone comes up to you (even if they are a woman) and wants to
            offer help, politely say, "No thank you." If a man, he could be a
            predator. If a woman, she could be the lurer. 17. When going out
            with your girlfriends, decide beforehand that you will stick
            together. Do not let your friend go off alone with a guy. 20. Don't
            check-in on Foursquare or Facebook when you arrive somewhere.
            Instead, check in as you leave. This way no one will be able to
            digitally stalk you and know your every move or when you're not
            home. Along the same lines, avoid tweeting or Facebooking from
            vacation, especially if your account is public, as it's a way of
            letting the world know that your home is unoccupied.
          </p>
          <div className="imagecontainer">
          <div className="container">
            <img src={walkingalonegood} className="image" />
            <div className="middle">
              <div className="text">Hello</div>
            </div>
          </div>
          <div className="container">
            <img src={cctv} className="image" />
            <div className="middle">
              <div className="text">Hello</div>
              </div>
            </div>
          </div>
        </div>
        <div className="travelAlternatives">uber lyft bus schedule etc</div>
      </div>
    </div>
  );
}

export default Safety;
