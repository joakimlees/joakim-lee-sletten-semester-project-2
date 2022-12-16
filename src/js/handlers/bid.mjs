import { bid } from "../api/listings/index.mjs";
import { refreshProfile } from "../api/user/profile.mjs";

export function placeBid(bidForm) {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  bidForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const method = form.method;
    const action = form.attributes.action.value;

    const number = form.bid.valueAsNumber;

    const bidItem = JSON.stringify({
      amount: number,
    });

    refreshProfile();
    bid(bidItem, id, action, method);
  });
}
