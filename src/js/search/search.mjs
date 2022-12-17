import { renderListings } from "../templates/renderers/listings.mjs";

export function searchSetUp(listings, container) {
  const searchForm = document.querySelector("form#searchForm");

  searchForm.addEventListener("input", (event) => {
    event.preventDefault();
    const form = event.target;
    const formValue = form.value;
    const searchTerm = formValue.toLowerCase();
    const filteredListings = listings.filter((listing) => {
      const title = listing.title.toLowerCase();
      const description = listing.description.toLowerCase();
      const seller = listing.seller.username.toLowerCase();

      const tagsMatch = Boolean(listing.tags.map((tag) => tag.toLowerCase()).filter((tag) => tag.includes(searchTerm)).length);

      return title.includes(searchTerm) || description.includes(searchTerm) || seller.includes(searchTerm) || tagsMatch;
    });
    renderListings(filteredListings, container);
  });
}
