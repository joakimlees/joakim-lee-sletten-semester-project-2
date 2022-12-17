export function searchSetUp() {
  const searchForm = document.querySelector("form#searchForm");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const searchTerm = form.searchbar.value;
    console.log(searchTerm);
  });
}
