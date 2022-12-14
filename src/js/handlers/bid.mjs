import { bid } from "../api/listings/bid.mjs";

export function placeBid(bidForm) {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  bidForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const method = form.method;
    const action = form.attributes.action.value;

    const number = form[0].valueAsNumber;

    const bidItem = JSON.stringify({ amount: number });

    bid(bidItem, id, action, method);
  });
}
