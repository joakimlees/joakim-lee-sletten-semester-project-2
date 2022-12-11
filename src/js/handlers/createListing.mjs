import { create } from "../api/listings/create.mjs";

export function createListing(listingForm) {
  listingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const method = form.method;
    const action = form.attributes.action.value;

    const formData = new FormData(form);

    const title = formData.get("title");
    const description = formData.get("description");
    const images = formData.get("images").split(", ");
    const endDate = new Date(formData.get("endsAt"));

    const listing = {
      title: title,
      description: description,
      endsAt: endDate,
    };

    create(listing, action, method);
  });
}
