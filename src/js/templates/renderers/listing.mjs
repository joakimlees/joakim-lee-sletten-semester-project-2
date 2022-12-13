import { template } from "../htmlTemplates/listing.mjs";

export function render(getList, parent) {
  parent.append(...getList.map(template));
}
