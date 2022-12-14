import { getListing } from "../api/listings/read.mjs";
import { singleListing } from "./htmlTemplates/listing.mjs";

export async function displaySingleListing() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const listingData = await getListing(id);

  singleListing(listingData);
}

/*import { renderListing } from "./renderers/listing.mjs";
import { getListing } from "../api/listings/read.mjs";

export async function displayListing() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const container = document.querySelector("#listing-container");

  const listingData = await getListing(id);

  renderListing(listingData, container);
}
*/
