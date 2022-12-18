const createListingBtn = document.getElementById("create-listing-btn");
const viewBidsBtn = document.getElementById("view-bids-btn");

export function changeContent() {
  if (createListingBtn) {
    createListingBtn.href = "../profile/login";
    createListingBtn.innerHTML = "Login to create a listing";
  } else if (viewBidsBtn) {
    viewBidsBtn.classList.add("d-none");
  }
}
