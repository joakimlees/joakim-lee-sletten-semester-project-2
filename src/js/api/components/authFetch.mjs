import { authHeaders } from "../auth/authHeaders.mjs";

export async function authorizedApiRequest(URL, options) {
  try {
    const response = await fetch(URL, {
      ...options,
      headers: authHeaders(),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    return error;
  } finally {
    console.log("dev note: javascript fetch() method finished");
  }
}
