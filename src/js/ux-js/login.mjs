export function loggedInUx() {
  const loginForm = document.getElementById("loginForm");

  loginForm.innerHTML = `
  <section class="d-flex flex-column justify-content-center my-5">
  <h2 class="text-success mx-auto">You are logged in<h2>
  <a href="../" class="btn btn-primary w-100 my-2">Go to Profile</a>
  <a href="../../listings" class="btn btn-light w-100 my-2">View Listings</a>
  </section>
  `;
}
