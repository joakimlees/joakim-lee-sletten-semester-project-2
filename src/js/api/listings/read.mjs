import { API_AUCTION_URL } from "../constants.mjs";
import { apiRequest } from "../fetch/fetch.mjs";
import { listingObject } from "../../domains/listing.mjs";

export async function getListings() {
  const listingsURL = API_AUCTION_URL + "/listings" + "?_seller=true&_bids=true";
  const result = await apiRequest(listingsURL);

  const myListingObject = result.map((listItem) => {
    const seller = listItem.seller;

    const { name, email, avatar, wins } = seller;

    const { id, title, description, tags, created, updated, endsAt, media } = listItem;

    const newListings = new listingObject(id, title, description, tags, created, updated, endsAt, media, name, email, avatar, wins);
    console.log(newListings);
    /*
    const { title, description, tags, media, created, updated, endsAt, seller, bids } = listing;

    const testReturn = new listingObject(listing.id, listing.title, listing.description, listing.tags, listing.media, listing.created, listing.updated, listing.endsAt, listing.seller, listing.bids);
*/
    //return myListingObject;
  });

  //return listOfListings;
}

export function getListing(id) {
  const listingURL = API_AUCTION_URL + "/listings/" + id + "?_seller=true&_bids=true";
  const singleListing = apiRequest(listingURL);

  return singleListing;
}
