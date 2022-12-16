import { generatedListingsHtml } from "./components/parsedHtml.mjs";
import { sliceEndsAt } from "./components/endsAt.mjs";
import { getHighestBid } from "./components/bids.mjs";

export function listingsTemplate(listingsDetails) {
  const listingHtml = generatedListingsHtml();

  const listingMainImage = listingHtml.getElementById("listing-main-image");

  listingMainImage.src = listingsDetails.images[0];
  listingMainImage.alt = "image of " + listingsDetails.title;

  const listingTitle = listingHtml.getElementById("listing-title");
  listingTitle.innerHTML = listingsDetails.title;

  const ends = listingHtml.getElementById("ends");
  sliceEndsAt(listingsDetails, ends);

  const bidContainer = listingHtml.getElementById("bid");
  const bids = listingsDetails.bids;

  getHighestBid(bids, bidContainer);

  const viewBtn = listingHtml.getElementById("view-listing-btn");
  viewBtn.href = `/listings/listing/?id=${listingsDetails.id}`;

  return listingHtml.body.firstChild;
}
