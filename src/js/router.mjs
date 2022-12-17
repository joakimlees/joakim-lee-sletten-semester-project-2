import { formListener } from "./handlers/userData.mjs";
import * as form from "./formVariables/index.mjs";
import { createListing } from "./handlers/createListing.mjs";
import { displayListings } from "./templates/listings.mjs";
import { displaySingleListing } from "./templates/listing.mjs";
import { displayBidHistory } from "./templates/bidHistory.mjs";
import { placeBid } from "./handlers/bid.mjs";
import { displayProfile } from "./templates/profile.mjs";
import { editProfile } from "./handlers/editProfile.mjs";
import { searchSetUp } from "./search/search.mjs";

const path = location.pathname;

switch (path) {
  case "/profile/register/":
    formListener(form.register);
    break;
  case "/profile/login/":
    formListener(form.login);
    break;
  case "/profile/":
    displayProfile();
    break;
  case "/profile/edit/":
    editProfile(form.editProfile);
    break;
  case "/listings/":
    displayListings();
    break;
  case "/listings/listing/":
    displaySingleListing();
    break;
  case "/listings/listing/bid/":
    displayBidHistory();
    placeBid(form.bid);
    break;
  case "/listings/create-listing/":
    createListing(form.createListing);
    break;
}

searchSetUp();

/*
const test = await getListing("f029b494-6327-44b4-930b-1872f1f2b087");

console.log(test.bids);

getListings().then(console.log);*/

//const test = load("profile");

//console.log(test.username);
