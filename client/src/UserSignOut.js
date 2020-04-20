import React from "react";
import "./App.css";
import Auth from "./Auth";
import Header from "./Header";
import { withRouter } from "react-router";

function UserSignOut(props) {
  const SignOut = () => {
    Auth.signout();
    console.log(Auth.getAuth());
    props.history.push("/signin");
  };

  return (
    <>
      <Header />
      <div className="bounds">
        <h1>Sign Out</h1>
        <p>Are u sure you want to sign out? </p>
        <button className="button" type="button" onClick={SignOut}>
          Sign Out
        </button>
      </div>
    </>
  );
}

export default withRouter(UserSignOut);
