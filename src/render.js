// @ts-check
export function render(/** @type {Node} */ elem) {
  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = "";
    app.appendChild(elem);
  }
}
