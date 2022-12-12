const parser = new DOMParser();

export const listingHtml = parser.parseFromString(
  `


              <div class="d-flex flex-column custom-card-container shadow-sm p-3">
                <div class="mx-auto flex-grow-1">
                  <img class="w-100" src="/test-image.jpg" alt="test" />
                </div>
                <div>
                  <div class="row mt-4">
                    <h3 class="text-primary col-10 text-start">Card Item Title</h3>
                    <p class="col-2 bi bi-heart-fill text-success text-end"></p>
                  </div>
                  <div class="row mt-3">
                    <p class="col">
                      Ends in: <br />
                      <span class="text-danger"> 1d 12h 03m</span>
                    </p>
                    <p class="col">
                      Current Bid: <br />
                      <span class="text-success">322</span>
                    </p>
                  </div>
                  <div class="row mt-2">
                    <div class="col">
                      <button class="btn btn-light w-100">Button</button>
                    </div>
                  </div>
                </div>
              </div>


`,
  "text/html"
);
