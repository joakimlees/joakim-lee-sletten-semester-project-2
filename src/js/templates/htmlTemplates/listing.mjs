import { sliceEndsAt } from "./components/endsAt.mjs";
import { getHighestBid } from "./components/bids.mjs";

export function singleListing(listingDetails) {
  const title = document.getElementById("title");
  const mainImage = document.getElementById("mainImage");
  const seller = document.getElementById("seller");
  const endsAt = document.getElementById("endsAt");
  const bidContainer = document.getElementById("bidContainer");
  const viewBidsBtn = document.getElementById("view-bids-btn");
  const description = document.getElementById("description");
  const imagesContainer = document.getElementById("imagesContainer");

  title.innerHTML = listingDetails.title;
  mainImage.src = listingDetails.images[0];
  seller.innerHTML = listingDetails.seller.name;
  viewBidsBtn.href = `/listings/listing/bid/?id=${listingDetails.id}`;
  description.innerHTML = listingDetails.description;

  sliceEndsAt(listingDetails, endsAt);

  const bids = listingDetails.bids;
  getHighestBid(bids, bidContainer);

  const imagesArray = listingDetails.images;
  imagesArray.map((imageUrl) => {
    const imageWrapper = document.createElement("div");
    const image = document.createElement("img");

    imageWrapper.classList.add("mx-auto", "my-4");
    image.classList.add("w-100");
    imageWrapper.appendChild(image);
    image.src = imageUrl;
    image.alt = "Additional image of " + listingDetails.title;
    imagesContainer.appendChild(imageWrapper);

    return imagesContainer;
  });
}
