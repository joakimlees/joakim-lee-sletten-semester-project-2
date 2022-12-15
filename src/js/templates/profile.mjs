import { load } from "../storage/load.mjs";

export function displayProfile() {
  const profile = load("profile");

  const username = document.querySelector("#profile-username");
  const profileImage = document.querySelector("#profile-image");
  const credits = document.querySelector("#profile-credits");
  const email = document.querySelector("#profile-email");

  username.innerHTML = profile.username;
  profileImage.src = profile.image;
  profileImage.alt = profile.username + "`s profile image";
  credits.innerHTML = credits.innerHTML + " " + profile.credits;
  email.innerHTML = email.innerHTML + " " + profile.email;
}
