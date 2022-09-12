import signUpForm from "./components/signUpForm";
import authControl from "./modules/authControl";
import bookmark from "./components/bookmark";
import "./styles.scss";
import spinner from "../assets/spinner.gif";

const app = document.getElementById("app");
if (app) app.innerHTML = `<div class=center><img src=${spinner} /></div>`;

authControl(async (user) => {
  if (user) {
    await bookmark(user);
  } else {
    signUpForm();
  }
});
