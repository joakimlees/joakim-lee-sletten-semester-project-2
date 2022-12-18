const createListingBtn = document.getElementById("create-listing-btn");

export function changeContent() {
  createListingBtn.href = "../profile/login";
  createListingBtn.innerHTML = "Login to create a listing";
}
