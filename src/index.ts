import SignUpForm from "./components/SignUpForm";
import authControl from "./modules/authControl";
import Bookmark from "./components/Bookmark";
import "./styles.scss";
import spinner from "../assets/spinner.gif";

const app = document.getElementById("app");
if (app) app.innerHTML = `<div class=center><img src=${spinner} /></div>`;

authControl(async (user) => {
  if (user) {
    await Bookmark(user);
  } else {
    SignUpForm();
  }
});
