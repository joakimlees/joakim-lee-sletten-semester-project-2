import { formListener } from "./handlers/userData.mjs";
import * as form from "./formVariables/index.mjs";
import { createListing } from "./handlers/createListing.mjs";
import { displayListings } from "./templates/listings.mjs";
//import { listingTemplate } from "./templates/htmlTemplates/listing.mjs";
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
  case "/listings/":
    displayListings();
    break;
  case "/listings/create-listing/":
    createListing(form.createListing);
    break;
}

displayListings();

/*
const test = await getListing("f029b494-6327-44b4-930b-1872f1f2b087");

console.log(test.description);

getListings().then(console.log);
*/
