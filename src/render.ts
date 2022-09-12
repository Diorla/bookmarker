export function render(elem: Node) {
  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = "";
    app.appendChild(elem);
  }
}
