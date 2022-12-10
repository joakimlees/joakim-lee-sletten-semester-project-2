import { load } from "../../storage/index.mjs";

export function headers() {
  const token = load("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function authorizedApiRequest(URL, options) {
  try {
    const response = await fetch(URL, {
      ...options,
      headers: headers(),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    return error;
  } finally {
    console.log("dev note: javascript fetch() method finished");
  }
}
