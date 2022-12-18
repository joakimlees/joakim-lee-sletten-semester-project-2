export function loginSuccess(container) {
  if (container) {
    container.innerHTML = `<div class="w-100 d-flex flex-column align-items-center mt-4 mb-5">
    <p class="text-success display-3">You are logged in<p>
    <div class="w-100">
      <button id="continue-button" class="btn btn-success mx-auto w-100">Continue to profile</button>
    </div>
   </div> `;

    const continueBtn = document.querySelector("#continue-button");

    continueBtn.addEventListener("click", () => {
      location.href = "../";
    });
  }
}

export function loginFailure(element, message) {
  element.innerText = message;
}

export function registerSuccess(message, name, email, password, error) {
  message.innerText = "Account Created";

  message.classList.remove("text-white");
  message.classList.add("text-success");
  name.classList.add("bg-success");
  email.classList.add("bg-success");
  password.classList.add("bg-success");
  error.classList.add("d-none");
}
