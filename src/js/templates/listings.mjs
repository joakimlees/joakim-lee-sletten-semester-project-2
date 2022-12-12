import { listings } from "./renderers/listing.mjs";
import { getListings } from "../api/listings/read.mjs";

export function listing() {
  const list = getListings();
  const container = document.querySelector("#listings-container");

  listings(list, container);
}
