export function searchSetUp(test) {
  const searchForm = document.querySelector("form#searchForm");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const searchTerm = form.searchbar.value;
    const filteredListings = test.filter((listing) => listing.title.includes(searchTerm));
    console.log(filteredListings);
  });
}
