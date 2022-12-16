// class for listing object
export class listingObject {
  constructor(id, title, description, tags, created, updated, endsAt, media, name, email, avatar, wins) {
    this.MyId = id;
    this.myTitle = title;
    this.myDescription = description;
    this.myTags = tags;
    this.myCreated = created;
    this.myUpdated = updated;
    this.endsAt = endsAt;
    this.images = media;
    this.seller_username = name;
    this.seller_email = email;
    this.seller_avatar = avatar;
    this.seller_wins = wins;

    /*
    this.title = title;
    this.description = description;
    this.tags = tags;
    this.images = media;
    this.created = created;
    this.updated = updated;
    this.endsAt = endsAt;
    this.seller = seller;
    this.bids = bids;*/
  }
}
