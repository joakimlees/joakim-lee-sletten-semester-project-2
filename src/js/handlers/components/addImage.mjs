import { createListing } from "../../formVariables/createListing.mjs";

function imageUrlValidator(url) {
  const pattern = /(^http[s]*:\/\/)([/^\S*$/])([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(png|gif|webp|jpeg|jpg)($|\?.*$)/i;
  const patternMatches = pattern.test(url.toLowerCase());
  if (patternMatches) {
    return url;
  } else return null;
}

export function addImage(array) {
  const imageInput = createListing.images;
  const imageCount = document.getElementById("image-count");

  const validatedImage = imageUrlValidator(imageInput.value);

  if (validatedImage) {
    array.push(validatedImage);
    imageCount.innerHTML = array.length;
    imageInput.value = "";
    return array;
  } else {
    console.log("error - image is: " + validatedImage);
  }
}
