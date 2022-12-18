import { load } from "../storage/load.mjs";
import { loggedIn, loggedOut } from "./components/navChanges.mjs";
import { loggedInUx } from "./login.mjs";

export function authUx(pathRegister, pathProfile) {
  const profileRegister = document.getElementById("nav-profile-register");
  const loginLogout = document.getElementById("nav-login-logout");
  const profile = load("profile");
  const token = load("token");

  if (token === null || token === undefined) {
    loggedOut(pathRegister, profileRegister, loginLogout);
  } else if (token.length >= 30 || profile.email || profile.email.includes("noroff")) {
    loggedIn(pathProfile, profileRegister, loginLogout);
    loggedInUx();
  }
}
