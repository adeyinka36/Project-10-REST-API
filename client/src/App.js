import React, { Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import UserSignIn from "./UserSignIn";
import UserSignUp from "./UserSignUp";
import Courses from "./Courses";
import Auth from "./Auth";
import NotFound from "./NotFound";
import CourseDetails from "./CourseDetails";
import Forbidden from "./Forbidden";
import CreateCourse from "./CreateCourse";
import UpdateCourse from "./UpdateCourse";
import PrivateRoute from "./PrivateRoute";
import UserSignOut from "./UserSignOut";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return Auth.getAuth() === "true" ? (
              <Redirect to="/courses" />
            ) : (
              <Redirect to="/courses" />
            );
          }}
        />
        <Route path="/signin" render={() => <UserSignIn />} />
        <Route path="/signup" render={() => <UserSignUp />} />
        <Route path="/signout" render={() => <UserSignOut />} />
        {/* <Route component={SignOut} path="/signout"></Route> */}
        <PrivateRoute
          component={CreateCourse}
          path="/create-course"
        ></PrivateRoute>
        <PrivateRoute
          component={UpdateCourse}
          path="/update-course"
        ></PrivateRoute>

        <PrivateRoute
          component={CourseDetails}
          path="/course-detail"
        ></PrivateRoute>
        
        <Route component={Courses} path="/courses"></Route>
        <Route path="/forbidden" component={Forbidden} />
        <Route render={() => <NotFound />} />
      </Switch>
    </Fragment>
  );
}

export default App;
