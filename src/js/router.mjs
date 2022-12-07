import { registerForm } from "./handlers/register.mjs";
import { loginForm } from "./handlers/login.mjs";

const path = location.pathname;

switch (path) {
  case "/profile/register/":
    registerForm();
    break;
  case "/profile/login/":
    loginForm();
    break;
}
