import { getListing } from "../api/listings/read.mjs";
import { bidHistory } from "./htmlTemplates/bidHistory.mjs";

export async function displayBidHistory() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const listingData = await getListing(id);

  bidHistory(listingData);
}
