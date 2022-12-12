import { API_AUCTION_URL } from "../constants.mjs";
import { apiRequest } from "../fetch/fetch.mjs";

export function getListings() {
  const listingsURL = API_AUCTION_URL + "/listings";
  apiRequest(listingsURL);
}

export function getListing(id) {
  const listingURL = API_AUCTION_URL + "/listings/" + id;
  apiRequest(listingURL);
}
