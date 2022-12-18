import { authHeaders } from "../components/authHeaders.mjs";

/**
 *
 * Function for handling fetch request with authorization headers.
 * @param {string} URL
 * @param {object} options
 * @returns the result/response from the network request.
 */
export async function authorizedApiRequest(URL, options) {
  try {
    const response = await fetch(URL, {
      ...options,
      headers: authHeaders(),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    return console.log(error);
  } finally {
    console.log("dev note: javascript fetch() method finished - authorized fetch");
  }
}
