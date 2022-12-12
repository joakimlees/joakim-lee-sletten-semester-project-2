import { API_AUCTION_URL } from "../constants.mjs";
import { apiRequest } from "../fetch/fetch.mjs";

export function getListings() {
  const listingsURL = API_AUCTION_URL + "/listings" + "?_seller=true&_bids=true";
  apiRequest(listingsURL);
}

export function getListing(id) {
  const listingURL = API_AUCTION_URL + "/listings/" + id + "?_seller=true&_bids=true";
  apiRequest(listingURL);
}
