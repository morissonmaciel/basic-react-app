
function registerServiceWorkerCore(filename) {
  // Use the window load event to keep the page load performant
  window.addEventListener("load", () => {
    navigator.serviceWorker
    .register(`/${filename}`)
    .then()
    .catch();
  });
}

export default function register() {
  const baseUrl = window.location.origin;

  const serviceWorkerFilename = "service-worker.js";

  if ("serviceWorker" in navigator) {
    console.log(`Service workers are supported: ${baseUrl}`);

    registerServiceWorkerCore(serviceWorkerFilename);
  } else {
    console.log("Service workers are not supported");
  }
}