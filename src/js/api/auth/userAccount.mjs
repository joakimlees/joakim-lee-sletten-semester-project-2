import { API_AUCTION_URL } from "../constants.mjs";

export async function authUser(profile, action, method) {
  const authURL = API_AUCTION_URL + action;

  const body = JSON.stringify(profile);

  const response = await fetch(authURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();
  console.log("auth func triggers");
  console.log(result);
}

/*
name oaklees
email oakless@stud.noroff.no

ross_geller
ross_geller@stud.noroff.no
*/
