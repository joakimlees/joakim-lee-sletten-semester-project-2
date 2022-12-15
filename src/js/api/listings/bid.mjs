// /api/v1/auction/listings/<id>/bids
import { API_AUCTION_URL } from "../constants.mjs";
import { authorizedApiRequest } from "../fetch/authFetch.mjs";

export function bid(amount, id, action, method) {
  const bidURL = `${API_AUCTION_URL}${action}${id}/bids`;
  const body = amount;

  const authOptions = {
    method,
    body,
  };

  authorizedApiRequest(bidURL, authOptions);
}
