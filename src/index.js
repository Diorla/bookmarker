// @ts-check
import authControl from "./modules/authControl";
import createElement from "./modules/createElement";
import signOut from "./modules/signOut";
import startAuth from "./modules/startAuth";
import addUrl from "./services/addUrl";
import "./styles.scss";

const app = document.getElementById("app");
if (app) app.innerHTML = "";

const render = (/** @type {Node} */ elem) => {
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

    const addUrlBtn = createElement({
      element: "button",
      innerHTML: "Add url",
      classList: ["btn"],
    });
    addUrlBtn.addEventListener("click", () => {
      addUrl(user.uid, { title, url, folder: "ABC%/%MNO%/%PQR" });
    });
    elem.appendChild(addUrlBtn);
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
