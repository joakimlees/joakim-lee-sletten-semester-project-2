export function sliceEndsAt(item, container) {
  if (item.endsAt) {
    const date = item.endsAt.slice(0, -14);
    const time = item.endsAt.slice(11, -8);
    return (container.innerHTML = date + " " + time);
  } else if (!item.ensAt) {
    const date = item.slice(0, -14);
    const time = item.slice(11, -8);
    return (container.innerHTML = date + " " + time);
  }
}
