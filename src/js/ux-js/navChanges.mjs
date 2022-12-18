import { load } from "../storage/load.mjs";

const profileRegister = document.getElementById("nav-profile-register");
const loginLogout = document.getElementById("nav-login-logout");

export function navChanges(pathProfile, pathRegister) {
  const profile = load("profile");
  const token = load("token");

  if (token === null || token === undefined) {
    profileRegister.innerHTML = "Register";
    profileRegister.href = pathRegister;
    loginLogout.classList.add("bi-box-arrow-right");
    loginLogout.innerHTML = "Login";
    console.log("user is logged out");
  } else if (token.length >= 30 || profile.email || profile.email.includes("noroff")) {
    profileRegister.innerHTML = "Profile";
    loginLogout.classList.add("bi-box-arrow-left");
    loginLogout.innerHTML = "Logout";
    profileRegister.href = pathProfile;
    console.log("user is logged in");
  }
}
