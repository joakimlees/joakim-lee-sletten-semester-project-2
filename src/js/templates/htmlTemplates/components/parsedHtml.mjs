export function generatedListingsHtml() {
  const parser = new DOMParser();

  const listingHtml = parser.parseFromString(
    `
              <div class="d-flex flex-column custom-card-container shadow-sm p-3">
                <div class="mx-auto d-flex flex-grow-1">
                  <img id="listing-main-image" class="w-100 custom-image-container-height my-auto" />
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
                      <a id="view-listing-btn" class="btn btn-light w-100">View listing</a>
                    </div>
                  </div>
                </div>
              </div>`,

    "text/html"
  );

  return listingHtml;
}
