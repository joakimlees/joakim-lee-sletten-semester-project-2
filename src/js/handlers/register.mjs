import { register } from "../api/auth/register.mjs";

export function registerForm() {
  const registerForm = document.querySelector("#registerForm");

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    const action = form.attributes.action.nodeValue;
    const method = form.method;
    register(profile, action, method);
  });
}
