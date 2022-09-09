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

/**
 * to get the url and title of the current tab
 * @returns
 */
async function getCurrentTabInfo() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  const title = tab.title;
  const url = tab.url;
  console.log(title, url);
  return {
    title,
    url,
  };
  // return tab;
}

authControl(async (user) => {
  if (user) {
    const { title, url } = await getCurrentTabInfo();

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
    const elem = createElement({
      element: "button",
      innerHTML: "Login",
      classList: ["btn", "primary"],
    });
    elem.addEventListener("click", () => {
      startAuth(true);
    });
    render(elem);
  }
});
