import { createListing } from "../../formVariables/createListing.mjs";

const addImageBtn = document.getElementById("addImage-btn");
const imageCount = document.getElementById("image-count");

export function addImage() {
  const imageArray = [];

  addImageBtn.addEventListener("click", () => {
    const imageInput = createListing.images;
    const pattern = /(^http[s]*:\/\/)([/^\S*$/])([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(png|gif|webp|jpeg|jpg)($|\?.*$)/i;
    const matches = pattern.test(imageInput.value.toLowerCase());

    imageArray.push(matches);
    imageInput.value = "";
    imageCount.innerHTML = imageArray.length;
    console.log(imageArray);
  });
}
