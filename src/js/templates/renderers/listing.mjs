import { template } from "../htmlTemplates/listing.mjs";

export function listings(list, parent) {
  parent.append(...list.map(template));
}
