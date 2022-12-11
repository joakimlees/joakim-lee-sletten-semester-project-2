import { load } from "../../storage/index.mjs";

export function authHeaders() {
  const token = load("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}
