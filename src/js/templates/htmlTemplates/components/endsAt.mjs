export function sliceEndsAt(item, container) {
  const date = item.endsAt.slice(0, -14);
  const time = item.endsAt.slice(11, -8);
  return (container.innerHTML = date + " " + time);
}
