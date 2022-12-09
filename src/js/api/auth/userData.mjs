import { API_AUCTION_URL } from "../constants.mjs";
import { apiRequest } from "../components/fetch.mjs";

/**
 * Sends a request to the AUCTION API/server, using the apiRequest function.
 * Setting the fetch() options for the request.
 * @param {object} profile object - containing key, value paris, which makes out the "body" in the fetch() options, i.e. user information such as: name, email, password etc.
 * @param {string} action string - a API URL endpoint, for sending/receiving data to/from.
 * @param {string} method string - method for the fetch() options, i.e. GET, POST, PUT, PATCH, DELETE.
 *
 * @example
 * ```js
 * //Sends a request to the AUCTION API/server.
 * //Setting the fetch() options for the request.
 *
 * const profile = {
 * name: yourName,
 * email: example@stud.noroff.no,
 * password: answer123,
 * };
 *
 * const action = "/url/endpoint";
 *
 * const method = "post";
 *
 * authUser(profile, action, method);
 *
 * ```
 *
 */
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
