import React from "react";
import walkingalonegood from "../../components/images/walkalonegood.jpg";

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
          </p>
          <div className="container">
            <img src={walkingalonegood} width="50%" className="image" />
            <div className="middle">
              <div className="text">Hello</div>
            </div>
          </div>
        </div>
        <div className="travelAlternatives">uber lyft bus schedule etc</div>
      </div>
    </div>
  );
}

export default Safety;
