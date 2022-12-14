import { sliceEndsAt } from "./components/endsAt.mjs";
import { getHighestBid } from "./components/bids.mjs";

export function bidHistory(listingDetails) {
  const title = document.getElementById("title");
  const mainImage = document.getElementById("mainImage");
  const seller = document.getElementById("seller");
  const endsAt = document.getElementById("endsAt");
  const bidContainer = document.getElementById("bidContainer");

  title.innerHTML = listingDetails.title;
  mainImage.src = listingDetails.media[0];
  seller.innerHTML = listingDetails.seller.name;

  sliceEndsAt(listingDetails, endsAt);

  const bids = listingDetails.bids;
  getHighestBid(bids, bidContainer);
}
