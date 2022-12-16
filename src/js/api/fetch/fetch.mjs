/**
 * Sends a request to a server/api/url, converting the response to json, and returning it.
 * catches any errors.
 * @param {string} URL The url which to send the request.
 * @param {object} options the options/information to include in the request(send to the server)
 * @returns {object} response from the request in json format.
 */
export async function apiRequest(URL, options) {
  try {
    const response = await fetch(URL, options);
    const result = await response.json();

    return result;
  } catch (error) {
    return error;
  } finally {
    console.log("dev note: javascript fetch() method finished - regular/unauthorized fetch");
  }
}
