import { API_AUCTION_URL } from "../constants.mjs";
import { authorizedApiRequest } from "../fetch/authFetch.mjs";
import * as storage from "../../storage/index.mjs";
import * as domain from "../../domains/index.mjs";
import * as ux from "../../ux-js/userForms.mjs";

export async function editProfile(avatar, username, method) {
  const editProfileURL = `${API_AUCTION_URL}/profiles/${username}/media`;
  const body = avatar;

  const authOptions = {
    method,
    body,
  };

  const primaryBtn = document.querySelector("#edit-btn");
  const secondaryBtn = document.querySelector("#discard-btn");
  const editSuccess = document.querySelector("#edit-success");
  const editError = document.querySelector("#edit-error");

  const updatedProfile = await authorizedApiRequest(editProfileURL, authOptions);

  if ("errors" in updatedProfile) {
    ux.loginFailure(editError, "Something went wrong. Make sure to use a valid image url");
  } else {
    editSuccess.innerHTML = "Avatar updated";
    editError.classList.add("d-none");
    primaryBtn.classList.add("d-none");
    secondaryBtn.className = "btn btn-success w-100";
    secondaryBtn.innerHTML = "Back to profile";
    storage.save("profile", new domain.UserObject(updatedProfile.name, updatedProfile.email, updatedProfile.credits, updatedProfile.avatar));
  }
}
