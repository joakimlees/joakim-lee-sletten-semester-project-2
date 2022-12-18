import { API_AUCTION_URL } from "../constants.mjs";
import { authorizedApiRequest } from "../fetch/authFetch.mjs";
import * as ux from "../../ux-js/userForms.mjs";

export async function create(listingDetails, action, method) {
  const createListingURL = API_AUCTION_URL + action;
  const body = JSON.stringify(listingDetails);

  const authOptions = {
    method,
    body,
  };

  const result = await authorizedApiRequest(createListingURL, authOptions);

  const errorMessage = document.querySelector("#create-listing-error");
  const successMessage = document.querySelector("#create-listing-success");
  const createListingBtn = document.querySelector("#create-listing-btn");
  const discardBtn = document.querySelector("#discard-btn");

  if ("errors" in result) {
    ux.loginFailure(errorMessage, "Unable to create listing. Please make sure the listing have a title and valid ends at date");
  } else if ("id" in result) {
    successMessage.innerHTML = "listing created - view your new listing";
    createListingBtn.classList.add("d-none");
    discardBtn.className = "btn btn-success w-100";
    discardBtn.href = `/listings/listing/?id=${result.id}`;
    discardBtn.innerHTML = "view listing";
    errorMessage.classList.add("d-none");
  }
}
