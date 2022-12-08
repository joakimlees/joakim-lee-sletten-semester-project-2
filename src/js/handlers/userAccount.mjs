import { authUser } from "../api/auth/userAccount.mjs";

/**
 *
 * @param {HTMLElement} userForm <form> element.
 *
 */
export function formListener(userForm) {
  userForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    const method = form.method;
    const action = form.attributes.action.value;
    authUser(profile, action, method);
  });
}
