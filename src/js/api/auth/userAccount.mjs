import { API_AUCTION_URL } from "../constants.mjs";
import { apiRequest } from "../components/fetch.mjs";

export async function authUser(profile, action, method) {
  const authURL = API_AUCTION_URL + action;
  const headers = { "Content-Type": "application/json" };
  const body = JSON.stringify(profile);

  const authOptions = {
    headers,
    method,
    body,
  };

  apiRequest(authURL, authOptions);
}

/*
name oaklees
email oakless@stud.noroff.no

ross_geller
ross_geller@stud.noroff.no

turbo_lees
turbo_lees@stud.noroff.no
*/
