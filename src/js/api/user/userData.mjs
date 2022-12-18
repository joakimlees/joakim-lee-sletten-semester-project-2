import { API_AUCTION_URL } from "../constants.mjs";
import { apiRequest } from "../fetch/fetch.mjs";
import * as storage from "../../storage/index.mjs";
import * as domain from "../../domains/index.mjs";
import * as ux from "../../ux-js/userForms.mjs";

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

  if (action === "/auth/login") {
    const { accessToken, ...user } = await apiRequest(authURL, authOptions);

    const loginForm = document.querySelector("#loginForm");
    const errorMessage = document.querySelector("#error-message-login");

    if ("errors" in user) {
      ux.loginFailure(errorMessage, user.errors[0].message);
    } else {
      ux.loginSuccess(loginForm);
    }

    storage.save("token", accessToken);
    storage.save("profile", new domain.UserObject(user.name, user.email, user.credits, user.avatar));
  } else {
    const result = await apiRequest(authURL, authOptions);
    const errorMessage = document.querySelector("#error-message-register");
    const registerHeading = document.querySelector("#register-heading");
    const username = document.querySelector("#username-register");
    const email = document.querySelector("#email-register");
    const password = document.querySelector("#password-register");

    if ("errors" in result) {
      ux.loginFailure(errorMessage, result.errors[0].message);
    } else {
      ux.registerSuccess(registerHeading, username, email, password, errorMessage);
    }
  }
}
