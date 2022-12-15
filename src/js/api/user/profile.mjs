import { API_AUCTION_URL } from "../constants.mjs";
import { authorizedApiRequest } from "../fetch/authFetch.mjs";
import * as storage from "../../storage/index.mjs";
import * as domain from "../../domains/index.mjs";

export async function refreshProfile() {
  const username = storage.load("profile").username;

  const profileURL = API_AUCTION_URL + "/profiles/" + username;

  const user = await authorizedApiRequest(profileURL);

  storage.save("profile", new domain.UserObject(user.name, user.email, user.credits, user.avatar));
}
