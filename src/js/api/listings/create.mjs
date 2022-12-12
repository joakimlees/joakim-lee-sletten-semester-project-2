import { API_AUCTION_URL } from "../constants.mjs";
import { authorizedApiRequest } from "../fetch/authFetch.mjs";

export function create(listingDetails, action, method) {
  const createListingURL = API_AUCTION_URL + action;
  const body = JSON.stringify(listingDetails);

  const authOptions = {
    method,
    body,
  };

  authorizedApiRequest(createListingURL, authOptions);
  /*
  if (listingDetails.id) {
    const createListingURL = `${API_AUCTION_URL}${action}/${listingDetails.id}`;
    authorizedApiRequest(createListingURL, authOptions);
  } else {
    const createListingURL = API_AUCTION_URL + action;
    authorizedApiRequest(createListingURL, authOptions);
  }
  */
}