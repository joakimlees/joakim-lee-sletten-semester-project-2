export function listingsTemplate(listingsDetails) {
  const parser = new DOMParser();

  const listingHtml = parser.parseFromString(
    `
              <div class="d-flex flex-column custom-card-container shadow-sm p-3">
                <div class="mx-auto flex-grow-1">
                  <img id="listing-main-image" class="w-100" />
                </div>
                <div>
                  <div class="row mt-4">
                    <h3 id="listing-title" class="text-primary col-10 text-start"></h3>
                    <p id="fav-icon" class="col-2 bi text-end"></p>
                  </div>
                  <div class="row mt-3">
                    <p class="col">
                      Ends at: <br />
                      <span id="ends" class="text-danger"></span>
                    </p>
                    <p class="col">
                      Current Bid: <br />
                      <span id="bid" class="text-success"></span>
                    </p>
                  </div>
                  <div class="row mt-2">
                    <div class="col">
                      <button class="btn btn-light w-100">Button</button>
                    </div>
                  </div>
                </div>
              </div>`,

    "text/html"
  );

  const listingMainImage = listingHtml.getElementById("listing-main-image");
  listingMainImage.src = listingsDetails.media[0];
  listingMainImage.alt = "image of " + listingsDetails.title;

  const listingTitle = listingHtml.getElementById("listing-title");
  listingTitle.innerHTML = listingsDetails.title;

  const ends = listingHtml.getElementById("ends");
  const date = listingsDetails.endsAt.slice(0, -14);
  const time = listingsDetails.endsAt.slice(11, -8);
  ends.innerHTML = date + " " + time;

  const bidContainer = listingHtml.getElementById("bid");
  const bids = listingsDetails.bids;

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

  return listingHtml.body.firstChild;
}

/*
console.log(listingHtml);

const testCon = document.querySelector("#testContainer");

console.log(listingHtml);

const htmlTest = listingHtml.body.outerHTML.slice(6, -7);

console.log("this is the test " + htmlTest);

testCon.innerHTML = listingHtml.body.outerHTML;
*/
