import { createListing } from "../../formVariables/createListing.mjs";

const addImageBtn = document.getElementById("addImage-btn");
const imageCount = document.getElementById("image-count");

export function addImage() {
  const imageArray = [];

  console.log(createListing.images);
  addImageBtn.addEventListener("click", () => {
    const imageInputValue = createListing.images.value;
    console.log(imageInputValue);
  });
}
