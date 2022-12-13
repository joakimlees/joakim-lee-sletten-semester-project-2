import { listingsTemplate } from "../htmlTemplates/listings.mjs";

export function renderListings(getListings, parent) {
  parent.append(...getListings.map(listingsTemplate));
}
