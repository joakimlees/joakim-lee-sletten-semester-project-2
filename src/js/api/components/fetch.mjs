export async function apiRequest(URL, options) {
  try {
    const response = await fetch(URL, options);
    const result = await response.json();

    return console.log(result);
  } catch (error) {
    return error;
  } finally {
    console.log("loading complete");
  }
}
