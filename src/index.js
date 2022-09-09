// @ts-check
import authControl from "./modules/authControl";
import createElement from "./modules/createElement";
import signOut from "./modules/signOut";
import startAuth from "./modules/startAuth";

const app = document.getElementById("app");

const render = (elem) => {
  if (app) {
    app.innerHTML = "";
    app.appendChild(elem);
  }
};

const getInfo = () => {
  const list = document.head.children;
  let title = "";
  const url = document.location.href;
  for (const item of list) {
    if (item.tagName === "TITLE") title = item.textContent || "";
  }
  return {
    title,
    url,
  };
};

authControl((user) => {
  if (user) {
    const { title, url } = getInfo();

    const elem = createElement({
      element: "div",
      innerHTML: `title: ${title}, url: ${url}`,
      classList: ["row"],
    });
    const logout = createElement({
      element: "button",
      innerHTML: "Logout",
      classList: ["btn"],
    });
    logout.addEventListener("click", signOut);
    elem.appendChild(logout);
    render(elem);
  } else {
    console.log("no user");
    const elem = createElement({
      element: "button",
      innerHTML: "Login",
      classList: ["btn", "primary"],
    });
    elem.addEventListener("click", () => {
      startAuth(true);
    });
    render(elem);
    console.log("no user");
  }
});
