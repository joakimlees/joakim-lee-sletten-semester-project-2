import { API_AUCTION_URL } from "../constants.mjs";

export async function register(profile, action, method) {
  const registerURL = API_AUCTION_URL + action;

  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();
  console.log(result);
}
