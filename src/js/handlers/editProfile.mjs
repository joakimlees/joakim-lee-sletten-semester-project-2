import * as api from "../api/user/edit.mjs";
import { load } from "../storage/load.mjs";

export function editProfile(editForm) {
  const profile = load("profile");
  const user = profile.username;

  editForm.name.value = profile.username;
  editForm.email.value = profile.email;

  editForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const method = "put";

    const newAvatar = form.avatar.value;

    const avatarItem = JSON.stringify({
      avatar: newAvatar,
    });

    api.editProfile(avatarItem, user, method);
  });
}
