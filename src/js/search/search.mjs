import { renderListings } from "../templates/renderers/listings.mjs";

export function searchSetUp(listings, container) {
  const searchForm = document.querySelector("form#searchForm");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const searchTerm = form.searchbar.value;
    const filteredListings = listings.filter((listing) => {
      const listingsMatch = listing.title.includes(searchTerm);
      return listingsMatch;
    });
    renderListings(filteredListings, container);
  });
}
