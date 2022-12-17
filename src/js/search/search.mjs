export function searchTest() {
  const searchForm = document.querySelector("form#searchForm");

  searchForm.addEventListener("submit", (event) => {
    const form = event.target;
    const searchTerm = form.searchbar.value;
  });
}
