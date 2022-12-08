import { authUser } from "../api/auth/userAccount.mjs";

export function setForm(userForm) {
  userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("event is triggered");

    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    const method = form.method;
    const action = form.attributes.action.value;
    console.log("form actions is set");
    authUser(profile, action, method);
  });
}
