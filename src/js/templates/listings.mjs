import { render } from "./renderers/listing.mjs";
import { getListings } from "../api/listings/read.mjs";

export async function displayListings() {
  const container = document.querySelector("#listings-container");
  const tester = await getListings();

  render(tester, container);
}
