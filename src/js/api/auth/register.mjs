import { API_AUCTION_URL } from "../constants.mjs";

export async function register(profile, action, method) {
  const registerURL = API_AUCTION_URL + action;
  console.log(registerURL);
}
