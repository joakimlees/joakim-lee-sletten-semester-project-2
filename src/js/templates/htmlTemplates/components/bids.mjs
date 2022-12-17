export function getHighestBid(bids, container) {
  switch (bids.length) {
    case 0:
      container.innerHTML = "no bids yet";
      break;
    case 1:
      container.innerHTML = JSON.stringify(bids[0].bid_amount) + ",-";
      break;
    default:
      const lastBid = bids[bids.length - 1].bid_amount;
      const bidAmount = JSON.stringify(lastBid);
      container.innerHTML = bidAmount + ",-";
  }
}
