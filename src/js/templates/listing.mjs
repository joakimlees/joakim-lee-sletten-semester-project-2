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
