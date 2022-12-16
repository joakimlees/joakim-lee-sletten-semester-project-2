import { API_AUCTION_URL } from "../constants.mjs";
import { apiRequest } from "../fetch/fetch.mjs";
import * as domain from "../../domains/index.mjs";

export async function getListings() {
  const listingsURL = API_AUCTION_URL + "/listings" + "?_seller=true&_bids=true";
  const result = await apiRequest(listingsURL);

  const listingsObject = result.map((listItem) => {
    const seller = listItem.seller;
    const bidderObject = listItem.bids;

    const myBidderObject = bidderObject.map((info) => {
      const { id, amount, bidderName, created } = info;
      const newObject = new domain.bidderObject(id, amount, bidderName, created);
      return newObject;
    });

    const { name, email, avatar, wins } = seller;

    const mySellersObject = new domain.sellerObject(name, email, avatar, wins);

    const { id, title, description, tags, created, updated, endsAt, media } = listItem;

    const myListingsObject = new domain.listingObject(id, title, description, tags, created, updated, endsAt, media, myBidderObject, mySellersObject);

    console.log(myListingsObject);
    //return myListingsObject;
  });

  //return listingsObject;
}

export function getListing(id) {
  const listingURL = API_AUCTION_URL + "/listings/" + id + "?_seller=true&_bids=true";
  const singleListing = apiRequest(listingURL);

  return singleListing;
}
