import { formListener } from "./handlers/userAccount.mjs";
import * as form from "./formVariables/index.mjs";

const path = location.pathname;

switch (path) {
  case "/profile/register/":
    formListener(form.register);
    break;
  case "/profile/login/":
    formListener(form.login);
    break;
}
