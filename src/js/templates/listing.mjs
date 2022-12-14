import { getListing } from "../api/listings/read.mjs";
import { singleListing } from "./htmlTemplates/listing.mjs";

export async function displaySingleListing() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const listingData = await getListing(id);

  singleListing(listingData);
}
