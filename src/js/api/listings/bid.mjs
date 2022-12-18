import { API_AUCTION_URL } from "../constants.mjs";
import { authorizedApiRequest } from "../fetch/authFetch.mjs";
import * as ux from "../../ux-js/userForms.mjs";

export async function bid(amount, id, action, method) {
  const bidURL = `${API_AUCTION_URL}${action}${id}/bids`;
  const body = amount;

  const authOptions = {
    method,
    body,
  };

  const result = await authorizedApiRequest(bidURL, authOptions);

  const bidError = document.getElementById("bid-error");
  const bidSuccess = document.getElementById("bid-success");

  if ("errors" in result) {
    ux.loginFailure(bidError, result.errors[0].message);
  } else if ("id" in result) {
    bidSuccess.innerHTML = "Your bid was successfully placed. refresh page to view updated bid history";
    bidError.classList.add("d-none");
  }
}
