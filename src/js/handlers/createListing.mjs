import { create } from "../api/listings/create.mjs";

export function createListing(listingForm) {
  listingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    const method = form.method;
    const action = form.attributes.action.value;

    create(profile, method, action);
  });
}
