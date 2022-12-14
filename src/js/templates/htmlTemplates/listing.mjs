export function singleListing(listingDetails) {
  const title = document.getElementById("title");
  const mainImage = document.getElementById("mainImage");
  const seller = document.getElementById("seller");
  const endsAt = document.getElementById("endsAt");
  const bidContainer = document.getElementById("bidContainer");
  const description = document.getElementById("description");
  const imagesContainer = document.getElementById("imagesContainer");

  title.innerHTML = listingDetails.title;
  mainImage.src = listingDetails.media[0];
  seller.innerHTML = listingDetails.seller.name;
  description.innerHTML = listingDetails.description;

  const date = listingDetails.endsAt.slice(0, -14);
  const time = listingDetails.endsAt.slice(11, -8);
  endsAt.innerHTML = date + " " + time;

  const bids = listingDetails.bids;

  switch (bids.length) {
    case 0:
      bidContainer.innerHTML = "no bids yet";
      break;
    case 1:
      bidContainer.innerHTML = JSON.stringify(bids[0].amount) + ",-";
      break;
    default:
      const lastBid = bids[bids.length - 1].amount;
      const bidAmount = JSON.stringify(lastBid);
      bidContainer.innerHTML = bidAmount + ",-";
  }

  const testItem = listingDetails.media;
  testItem.map((url) => {
    const imageWrapper = document.createElement("div");
    const image = document.createElement("img");

    imageWrapper.classList.add("mx-auto", "my-4");
    image.classList.add("w-100");
    imageWrapper.appendChild(image);
    image.src = url;
    image.alt = "Additional image of " + listingDetails.title;
    imagesContainer.appendChild(imageWrapper);

    return imagesContainer;
  });
}
