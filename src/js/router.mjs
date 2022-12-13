import { formListener } from "./handlers/userData.mjs";
import * as form from "./formVariables/index.mjs";
import { createListing } from "./handlers/createListing.mjs";
import { displayListings } from "./templates/listings.mjs";

const path = location.pathname;

switch (path) {
  case "/profile/register/":
    formListener(form.register);
    break;
  case "/profile/login/":
    formListener(form.login);
    break;
  case "/listings/":
    displayListings();
    break;
  case "/listings/create-listing/":
    createListing(form.createListing);
    break;
}
