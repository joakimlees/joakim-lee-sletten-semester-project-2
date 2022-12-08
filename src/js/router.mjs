import { setForm } from "./handlers/userAccount.mjs";
import * as form from "./formVariables/index.mjs";

const path = location.pathname;

switch (path) {
  case "/profile/register/":
    setForm(form.register);
    break;
  case "/profile/login/":
    setForm(form.login);
    break;
}
