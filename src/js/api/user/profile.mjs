import { API_AUCTION_URL } from "../constants.mjs";
import { authorizedApiRequest } from "../fetch/authFetch.mjs";
import { load } from "../../storage/load.mjs";

export async function getProfile() {
  const user = load("profile").username;

  const profileURL = API_AUCTION_URL + "/profiles/" + user;
  const profileData = await authorizedApiRequest(profileURL);

  return profileData;
}
