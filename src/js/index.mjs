import "./router.mjs";

const testForm = document.querySelector("#createListingForm");

testForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const listingDetails = Object.fromEntries(formData.entries());
  console.log(listingDetails.endsAt);
  const endDate = new Date(listingDetails.endsAt);
  console.log(endDate);
  const method = form.method;
  const action = form.attributes.action.value;

  console.log(listingDetails);
});
