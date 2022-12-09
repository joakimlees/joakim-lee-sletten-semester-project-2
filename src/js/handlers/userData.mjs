import { authUser } from "../api/auth/userData.mjs";

/**
 * On a submit event, the authUser function is called with the arguments:
 * profile, action, method.
 * @param {HTMLElement} userForm a HTML <form> element.
 * The "form data" from the userForm name and value(key, value) of the input(s) is
 * stored as an object/variable, called profile.
 * And passed in as an argument in the "authUser" function, along with the
 * form method and form action, stored as variables called method and action.
 * (which is the three arguments passed in the authUser function, which this function
 * calls on a submit event).
 * @example
 * ```js
 * // On a submit event, the authUser function is called with the arguments:
 * profile, action, method.
 *
 * const yourForm = document.querySelector("#yourForm");
 *
 * formListener(yourForm);
 *
 * // expect:
 * profile - to be an object with key-value pairs equal to the name and value submitted in the form.
 * method - to be equal to the form method, i.e. GET, POST, PUT, PATCH, DELETE.
 * action - to be equal to the form action, i.e. URL or php file.
 *
 * ```
 */
export function formListener(userForm) {
  if (userForm) {
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
}
