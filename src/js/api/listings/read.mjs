import { API_AUCTION_URL } from "../constants.mjs";
import { apiRequest } from "../fetch/fetch.mjs";

export function getListings() {
  const listingsURL = API_AUCTION_URL + "/listings" + "?_seller=true&_bids=true";
  const listOfListings = apiRequest(listingsURL);

  return listOfListings;
}

export function getListing(id) {
  const listingURL = API_AUCTION_URL + "/listings/" + id + "?_seller=true&_bids=true";
  const singleListing = apiRequest(listingURL);

  return singleListing;
}
