import { registerForm } from "./handlers/register.mjs";

const path = location.pathname;

switch (path) {
  case "/profile/register/":
    registerForm();
    break;
}
