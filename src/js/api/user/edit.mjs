import { API_AUCTION_URL } from "../constants.mjs";
import { authorizedApiRequest } from "../fetch/authFetch.mjs";
import * as storage from "../../storage/index.mjs";
import * as domain from "../../domains/index.mjs";

export async function editProfile(avatar, username, action, method) {
  const editProfileURL = `${API_AUCTION_URL}${action}${username}/media`;
  const body = avatar;

  const authOptions = {
    method,
    body,
  };

  const updatedProfile = await authorizedApiRequest(editProfileURL, authOptions);
  storage.save("profile", new domain.UserObject(updatedProfile.name, updatedProfile.email, updatedProfile.credits, updatedProfile.avatar));
}
