import { renderListings } from "./renderers/listings.mjs";
import { getListings } from "../api/listings/read.mjs";

export async function displayListings() {
  const container = document.querySelector("#listings-container");
  const listingsData = await getListings();

  renderListings(listingsData, container);
}
