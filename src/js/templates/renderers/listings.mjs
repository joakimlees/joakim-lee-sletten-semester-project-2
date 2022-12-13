import { listingsTemplate } from "../htmlTemplates/listing.mjs";

export function renderListings(getListings, parent) {
  parent.append(...getListings.map(listingsTemplate));
}
