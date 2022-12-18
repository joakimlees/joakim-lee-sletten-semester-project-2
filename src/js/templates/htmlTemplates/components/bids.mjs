/**
 *
 * Function for finding the highest number of the bid_amount property of all the objects in the array.
 * and displaying it in the container/html element.
 * @param {object} bids
 * @param {HTMLElement} container
 */
export function getHighestBid(bids, container) {
  const allBidAmounts = [];
  bids.forEach((bid) => {
    allBidAmounts.push(bid.bid_amount);
  });

  const highestBidAmount = Math.max(...allBidAmounts);

  switch (bids.length) {
    case 0:
      container.innerHTML = "no bids yet";
      break;
    default:
      container.innerHTML = JSON.stringify(highestBidAmount) + ",-";
  }
}
