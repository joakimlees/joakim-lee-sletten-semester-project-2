import { authHeaders } from "../components/authHeaders.mjs";

export async function authorizedApiRequest(URL, options) {
  try {
    const response = await fetch(URL, {
      ...options,
      headers: authHeaders(),
    });
    const result = await response.json();

    console.log(result);
    return result;
  } catch (error) {
    return console.log(error);
  } finally {
    console.log("dev note: javascript fetch() method finished - authorized fetch");
  }
}
