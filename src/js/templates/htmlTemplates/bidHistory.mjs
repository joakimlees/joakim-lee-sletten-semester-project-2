import { sliceEndsAt } from "./components/endsAt.mjs";
import { getHighestBid } from "./components/bids.mjs";

export function bidHistory(listingDetails) {
  const title = document.getElementById("title");
  const mainImage = document.getElementById("mainImage");
  const seller = document.getElementById("seller");
  const endsAt = document.getElementById("endsAt");
  const bidContainer = document.getElementById("bidContainer");
  const bidHistoryContainer = document.getElementById("bid-history-container");

  title.innerHTML = listingDetails.title;
  mainImage.src = listingDetails.media[0];
  seller.innerHTML = listingDetails.seller.name;

  sliceEndsAt(listingDetails, endsAt);

  const bids = listingDetails.bids;
  getHighestBid(bids, bidContainer);

  const bidsArray = listingDetails.bids;
  bidsArray.map((bid) => {
    const bidWrapper = document.createElement("li");
    const bidderName = document.createElement("div");
    const amountName = document.createElement("div");
    const timeName = document.createElement("div");
    const bidder = document.createElement("span");
    const amount = document.createElement("span");
    const time = document.createElement("span");

    bidWrapper.classList.add("list-group-item", "border-bottom", "pb-4", "mt-4");
    bidder.classList.add("text-primary");
    amount.classList.add("text-success");
    bidWrapper.appendChild(bidderName);
    bidWrapper.appendChild(amountName);
    bidWrapper.appendChild(timeName);
    bidderName.appendChild(bidder);
    amountName.appendChild(amount);
    timeName.appendChild(time);

    bidder.innerHTML = "Bidder: ";
    bidderName.innerHTML = bidderName.innerHTML + bid.bidderName;
    amount.innerHTML = "Amount: ";
    amountName.innerHTML = amountName.innerHTML + JSON.stringify(bid.amount);
    time.innerHTML = "Placed: ";
    sliceEndsAt(bid.created, timeName);

    bidHistoryContainer.appendChild(bidWrapper);

    return bidHistoryContainer;
  });
}
