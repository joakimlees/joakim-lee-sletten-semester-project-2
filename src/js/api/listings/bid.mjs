// /api/v1/auction/listings/<id>/bids
import { API_AUCTION_URL } from "../constants.mjs";
import { authorizedApiRequest } from "../fetch/authFetch.mjs";

export function bid(amount, id, action, method) {
  //action = /listings/<id>/bids
  const listingsUrl = action.slice(0, -4);
  const bidsUrl = action.slice(9);

  const bidURL = API_AUCTION_URL + listingsUrl + id + bidsUrl;
  const body = amount;

  const authOptions = {
    method,
    body,
  };

  console.log(bidURL);

  authorizedApiRequest(bidURL, authOptions);
}
