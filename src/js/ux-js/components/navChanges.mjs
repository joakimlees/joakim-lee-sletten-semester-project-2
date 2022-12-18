export function loggedIn(path, profileElement, logOutElement) {
  profileElement.innerHTML = "Profile";
  profileElement.href = path;
  logOutElement.innerHTML = "Logout";
  logOutElement.className = "bi bi-box-arrow-left text-light nav-link d-flex flex-column text-center";
  console.log("user is logged in");
}

export function loggedOut(path, registerElement, logInElement) {
  registerElement.innerHTML = "Register";
  registerElement.href = path;
  logInElement.innerHTML = "Login";
  logInElement.className = "bi bi-box-arrow-right text-light nav-link d-flex flex-column text-center";
  console.log("user is logged out");
}
