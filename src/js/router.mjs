import { formListener } from "./handlers/userData.mjs";
import * as form from "./formVariables/index.mjs";
import { createListing } from "./handlers/createListing.mjs";
import { getListing } from "./api/listings/read.mjs";
import { getListings } from "./api/listings/read.mjs";

const path = location.pathname;

switch (path) {
  case "/profile/register/":
    formListener(form.register);
    break;
  case "/profile/login/":
    formListener(form.login);
    break;

  case "/listings/create-listing/":
    createListing(form.createListing);
    break;
}

getListing("535cd966-40d6-4087-8a5c-bfc1212580bc");

getListings();
