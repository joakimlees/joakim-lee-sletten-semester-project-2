import { create } from "../api/listings/create.mjs";
import { addImage } from "./components/addImage.mjs";

export function createListing(listingForm) {
  const addImageBtn = document.getElementById("addImage-btn");
  const mediaArray = [];
  addImageBtn.addEventListener("click", () => {
    addImage(mediaArray);
  });
  listingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const method = form.method;
    const action = form.attributes.action.value;

    const formData = new FormData(form);

    const title = formData.get("title");
    const description = formData.get("description");
    const endDate = new Date(formData.get("endsAt"));

    const listing = {
      title: title,
      description: description,
      media: mediaArray,
      endsAt: endDate,
    };

    return console.log(listing);

    //create(listing, action, method);
  });
}
