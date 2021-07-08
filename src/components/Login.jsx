import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider, providerFb } from "../config/firebase";
import { actionTypes } from "../config/reducer";
import { useStateValue } from "../config/StateProvider";
import "./Login.css";

function Login() {
  const [state, dispatch] = useStateValue();

  // Google sign in
  const signInGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result.user.displayName);
      })
      .catch((error) => {
        alert(error.message);
      });
    // Google sign in
  };

  // Facebook Sign In
  // const signInFacebook = () => {
  //   auth
  //     .signInWithPopup(providerFb)
  //     .then((result) => {
  //       console.log(result.user.displayName);
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };
  // Facebook Sign In

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://cdn.icon-icons.com/icons2/2201/PNG/512/facebook_logo_square_icon_134009.png"
          alt="facebook"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="facebook logo"
        />
      </div>
      <Button onClick={signInGoogle}>Sign In with Google</Button>
    </div>
  );
}

export default Login;
