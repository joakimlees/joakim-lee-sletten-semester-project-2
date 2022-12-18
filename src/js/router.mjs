import { formListener } from "./handlers/userData.mjs";
import * as form from "./formVariables/index.mjs";
import { createListing } from "./handlers/createListing.mjs";
import { displayListings } from "./templates/listings.mjs";
import { displaySingleListing } from "./templates/listing.mjs";
import { displayBidHistory } from "./templates/bidHistory.mjs";
import { placeBid } from "./handlers/bid.mjs";
import { displayProfile } from "./templates/profile.mjs";
import { editProfile } from "./handlers/editProfile.mjs";
import { authUx } from "./ux-js/auth.mjs";

const path = location.pathname;

switch (path) {
  case "/":
    authUx("/profile/register", "/profile");
    break;
  case "/profile/register/":
    formListener(form.register);
    authUx("./", "../");
    break;
  case "/profile/login/":
    formListener(form.login);
    authUx("../register", "../");
    break;
  case "/profile/":
    displayProfile();
    authUx("./register", "./");
    break;
  case "/profile/edit/":
    editProfile(form.editProfile);
    authUx("../register", "../");
    break;
  case "/listings/":
    displayListings();
    authUx("../profile/register", "../profile");
    break;
  case "/listings/listing/":
    displaySingleListing();
    authUx("../../profile/register", "../../profile");
    break;
  case "/listings/listing/bid/":
    displayBidHistory();
    placeBid(form.bid);
    authUx("../../../profile/register", "../../../profile");
    break;
  case "/listings/create-listing/":
    createListing(form.createListing);
    authUx("../../profile/register", "../../profile");
    break;
}
