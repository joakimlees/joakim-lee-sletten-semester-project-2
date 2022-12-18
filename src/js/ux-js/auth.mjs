import * as storage from "../storage/index.mjs";
import { loggedIn, loggedOut } from "./components/navChanges.mjs";
import { changeContent } from "./components/changeContent.mjs";
import { loginSuccess } from "./userForms.mjs";

export function authUx(pathRegister, pathProfile) {
  const profileRegister = document.getElementById("nav-profile-register");
  const loginLogout = document.getElementById("nav-login-logout");
  const loginForm = document.getElementById("loginForm");
  const profile = storage.load("profile");
  const token = storage.load("token");

  if (token === null || token === undefined) {
    loggedOut(pathRegister, profileRegister, loginLogout);
    changeContent();
  } else if (token.length >= 30 || profile.email || profile.email.includes("noroff")) {
    loggedIn(pathProfile, profileRegister, loginLogout);
    loginLogout.addEventListener("click", () => {
      storage.remove("profile");
      storage.remove("token");
    });
    loginSuccess(loginForm);
  }
}
