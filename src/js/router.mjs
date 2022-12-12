import { formListener } from "./handlers/userData.mjs";
import * as form from "./formVariables/index.mjs";
import { createListing } from "./handlers/createListing.mjs";
import { getListing } from "./api/listings/read.mjs";

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

getListing("9947ba0f-723c-4786-a853-3edb2e7bc60d");
