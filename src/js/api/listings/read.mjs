import { API_AUCTION_URL } from "../constants.mjs";
import { apiRequest } from "../fetch/fetch.mjs";
import * as domain from "../../domains/index.mjs";

export async function getListings() {
  const listingsURL = API_AUCTION_URL + "/listings" + "?_seller=true&_bids=true&sort=created&active=true";
  const result = await apiRequest(listingsURL);

  const listingsObject = result.map((listItem) => {
    const bidderObject = listItem.bids;

    const myBidderObject = bidderObject.map((info) => {
      const { id, amount, bidderName, created } = info;
      const newObject = new domain.bidderObject(id, amount, bidderName, created);
      return newObject;
    });

    const seller = listItem.seller;
    const { name, email, avatar, wins } = seller;

    const mySellersObject = new domain.sellerObject(name, email, avatar, wins);

    const { id, title, description, tags, created, updated, endsAt, media } = listItem;

    const myListingsObject = new domain.listingObject(id, title, description, tags, created, updated, endsAt, media, myBidderObject, mySellersObject);

    return myListingsObject;
  });

  return listingsObject;
}

export async function getListing(id) {
  const listingURL = API_AUCTION_URL + "/listings/" + id + "?_seller=true&_bids=true";
  const singleListing = await apiRequest(listingURL);

  const bidderObject = singleListing.bids;

  const myBidderObject = bidderObject.map((info) => {
    const { id: bidderId, amount, bidderName, created } = info;
    const newObject = new domain.bidderObject(bidderId, amount, bidderName, created);
    return newObject;
  });

  const seller = singleListing.seller;
  const { name, email, avatar, wins } = seller;

  const mySellersObject = new domain.sellerObject(name, email, avatar, wins);

  const { id: listingId, title, description, tags, created, updated, endsAt, media } = singleListing;

  const myListingObject = new domain.listingObject(listingId, title, description, tags, created, updated, endsAt, media, myBidderObject, mySellersObject);

  return myListingObject;
}
