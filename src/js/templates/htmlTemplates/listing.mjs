export function listingTemplate(listingDetails) {
  const parser = new DOMParser();

  const listingHtml = parser.parseFromString(
    `
    <div class="d-flex flex-column custom-container-sm mx-auto">
    <div class="mx-auto">
      <img class="w-100" src="" alt="" />
    </div>
    <div>
      <div class="row mt-4">
        <h3 class="text-primary col-10 text-start">Card Item Title</h3>
        <p class="col-2 bi bi-heart-fill text-success text-end"></p>
      </div>
      <div class="row mt-4">
        <p class="col-2"></p>
      </div>
      <div class="row mt-3">
        <p class="col">
          Ends in: <br />
          <span class="text-danger"></span>
        </p>
        <p class="col">
          Current Bid: <br />
          <span class="text-success"></span>
        </p>
      </div>
      <div class="row mt-2">
        <div class="col">
          <button class="btn btn-success w-100">View</button>
        </div>
      </div>
      <div class="text-start row mt-5">
        <h3 class="text-primary">Descritption:</h3>
        <p></p>
      </div>
      <div class="text-start row mt-5">
        <h3 class="text-primary">More images</h3>
        <div class="mx-auto my-4">
          <img class="w-100" src="/test-image.jpg" alt="test" />
        </div>
        <div class="mx-auto">
          <img class="w-100" src="/test-image.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>`,

    "text/html"
  );

  return console.log(listingHtml.body.firstChild);
}
