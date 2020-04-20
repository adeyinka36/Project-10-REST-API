import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Auth from "./Auth";

function Header() {
  const loggedInUser = Auth.getloggedInUser();
  const isAuth = Auth.getAuth();

  return (
    <>
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo">Courses</h1>
          <nav>
            {isAuth && (
              <span>
                {" "}
                Welcome {loggedInUser.firstName} {loggedInUser.lastName}!{" "}
              </span>
            )}

            {isAuth && (
              <Link className="signup" to="/signout">
                Sign Out
              </Link>
            )}

            {!isAuth && (
              <Link className="signup" to="/signup">
                Sign Up
              </Link>
            )}

            {!isAuth && (
              <Link className="signin" to="/signin">
                Sign In
              </Link>
            )}
          </nav>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Header;
