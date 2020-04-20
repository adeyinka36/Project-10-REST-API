import React, { useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./App.css";
import Auth from "./Auth";
import Header from "./Header";

const UserSignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMesage] = useState("");

  const Authenticate = () => {
    let base64 = require("base-64");
    let url = "http://localhost:5000/api/users";
    let headers = new Headers();
    headers.append(
      "Authorization",
      "Basic " + base64.encode(email + ":" + password)
    );

    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          console.log(user);
          Auth.authenticate(
            email,
            password,
            user.id,
            user.firstName,
            user.lastName
          );
          props.history.push("/courses");
        } else {
          setMesage("Email Address or Password is incorrect.");
        }
      });
  };

  return (
    <React.Fragment>
      <div id="root">
        <Header />
        <div className="bounds">
          <div className="grid-33 centered signin">
            <h1>User Sign In</h1>
            <div>
              <form>
                <div>
                  <input
                    id="emailAddress"
                    name="emailAddress"
                    type="text"
                    className=""
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className=""
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="grid-100 pad-bottom">
                  <button
                    className="button"
                    type="button"
                    onClick={Authenticate}
                  >
                    Sign In
                  </button>
                </div>
                {message && <p style={{ color: "red" }}>{message}</p>}
              </form>
            </div>
            <p>&nbsp;</p>
            <p>
              Don't have a user account? <Link to="/signup">Click here</Link> to
              sign up!
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(UserSignIn);
