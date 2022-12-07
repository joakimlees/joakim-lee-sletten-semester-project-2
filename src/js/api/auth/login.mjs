import { API_AUCTION_URL } from "../constants.mjs";

export async function login(profile, action, method) {
  const loginURL = API_AUCTION_URL + action;

  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();
  console.log(result);
}

/*
name oaklees
email oakless@stud.noroff.no
*/
