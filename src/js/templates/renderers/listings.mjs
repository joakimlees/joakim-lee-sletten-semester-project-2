import { listingsTemplate } from "../htmlTemplates/listings.mjs";

export function renderListings(getListings, parent) {
  parent.innerHTML = "";
  parent.append(...getListings.map(listingsTemplate));
}
