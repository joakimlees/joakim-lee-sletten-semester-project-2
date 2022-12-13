import { listingTemplate } from "../htmlTemplates/listing.mjs";

export function render(getList, parent) {
  parent.append(...getList.map(listingTemplate));
}
