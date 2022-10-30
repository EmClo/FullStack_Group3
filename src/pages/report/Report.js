import { useState } from "react";
import { send } from "emailjs-com";
const ReportCrime = () => {
  const [user_name, set_user_name] = useState("");
  const [user_last_name, set_user_last_name] = useState("");
  const [user_email, set_user_email] = useState("");
  const [user_message, set_user_message] = useState("");
  const handleName = (e) => {
    set_user_name(e.target.value);
  };
  const handleLastName = (e) => {
    set_user_last_name(e.target.value);
  };
  const handleEmail = (e) => {
    set_user_email(e.target.value);
  };
  const handleMessage = (e) => {
    set_user_message(e.target.value);
  };
  const sendMail = (e) => {
    e.preventDefault();
    send(
      "service_z55i599",
      "template_8mio59r",
      { user_name, user_last_name, user_email, user_message },
      "DwUvAy249eatCc_-P"
    )
      .then((response) => {
        console.log(
          "Your message has been sent",
          response.status,
          response.text
        );
      })
      .catch((err) => {
        console.log("Failed", err);
      });
    set_user_name("");
    set_user_last_name("");
    set_user_email("");
    set_user_message("");
  };

  return (
    <div class="mapbackground">
      <h1>
        {" "}
        Please let us know if there is anything you would like to report about
        crime in your area or any other queries
      </h1>
      <form onSubmit={sendMail}>
        <ul class="inputboxes">
          <li>
            <input
              className="inputtextarea"
              type="text"
              name="user_name"
              value={user_name}
              onChange={handleName}
              placeholder="First Name"
            />
          </li>
          <li>
            <input
              className="inputtextarea"
              type="text"
              name="user_last_name"
              value={user_last_name}
              onChange={handleLastName}
              placeholder="Last Name"
            />
          </li>
          <li>
            <input
              className="inputtextarea"
              type="email"
              name="user_email"
              value={user_email}
              onChange={handleEmail}
              placeholder="Your Email"
            />
          </li>
        </ul>
        <div class="inputboxesmessage">
          <textarea
            className="inputtextarea"
            name="user_message"
            value={user_message}
            onChange={handleMessage}
            placeholder="Your Message..."
          />
        </div>
        <div>
          <button class="clickbutton" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReportCrime;
