// class for listing object
export class listingObject {
  constructor(id, title, description, tags, created, updated, endsAt, media, bidder, seller) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.tags = tags;
    this.created = created;
    this.updated = updated;
    this.endsAt = endsAt;
    this.images = media;
    this.bids = bidder;
    this.seller = seller;
  }
}
