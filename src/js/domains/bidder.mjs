// class for bidder object
export class bidderObject {
  constructor(bidderId, amount, bidderName, bidPlaced) {
    this.id = bidderId;
    this.bid_amount = amount;
    this.bidder_username = bidderName;
    this.bid_created = bidPlaced;
  }
}
