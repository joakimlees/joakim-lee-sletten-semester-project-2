import { renderListings } from "./renderers/listings.mjs";
import { getListings } from "../api/listings/read.mjs";
import { searchSetUp } from "../search/search.mjs";

export async function displayListings() {
  const container = document.querySelector("#listings-container");
  const listingsData = await getListings();

  searchSetUp(listingsData);

  renderListings(listingsData, container);
}
