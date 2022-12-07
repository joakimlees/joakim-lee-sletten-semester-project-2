import { login } from "../api/auth/login.mjs";

export function loginForm() {
  const loginForm = document.querySelector("#loginForm");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    const method = form.method;
    const action = form.attributes.action.value;
    login(profile, action, method);
  });
}
