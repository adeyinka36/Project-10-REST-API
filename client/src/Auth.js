const Auth = {
    authenticate(email, password, userid, firstName, lastName) {
      sessionStorage.setItem("isAuthenticated", true); // "true" gets stored as a String
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("password", password);
      sessionStorage.setItem("userId", userid);
      sessionStorage.setItem("firstName", firstName);
      sessionStorage.setItem("lastName", lastName);
    },
    signout() {
      sessionStorage.setItem("isAuthenticated", false);
      sessionStorage.setItem("email", "");
      sessionStorage.setItem("password", "");
      sessionStorage.setItem("userId", 0);
      sessionStorage.setItem("firstName", "");
      sessionStorage.setItem("lastName", "");
      // a false wrapped inside a string ie "false" wil evaluate to true in js,
      // to fix this we have to remove the key, so that it will evaluate to null in Header.js and null means false as a boolean {isAuth}
      sessionStorage.removeItem("isAuthenticated");
    },
    getAuth() {
      return sessionStorage.getItem("isAuthenticated");
    },
    getUserId() {
      return sessionStorage.getItem("userId");
    },
  
    getloggedInUser() {
      let loggedInUser = {
        email: sessionStorage.getItem("email"),
        password: sessionStorage.getItem("password"),
        userId: sessionStorage.getItem("userId"),
        firstName: sessionStorage.getItem("firstName"),
        lastName: sessionStorage.getItem("lastName"),
      };
      return loggedInUser;
    },
  };
  export default Auth;
   