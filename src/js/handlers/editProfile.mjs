import * as api from "../api/user/edit.mjs";
import { load } from "../storage/load.mjs";

export function editProfile(editForm) {
  const profile = load("profile");
  const username = profile.username;

  editForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const method = "put";
    const action = form.attributes.action.value;

    const newAvatar = form.avatar.value;

    const avatarItem = JSON.stringify({
      avatar: newAvatar,
    });

    api.editProfile(avatarItem, username, action, method);
  });
}
