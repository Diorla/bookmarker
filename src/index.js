// @ts-check
import signUpForm from "./components/signUpForm";
import authControl from "./modules/authControl";
import bookmark from "./components/bookmark";
import "./styles.scss";

const app = document.getElementById("app");
if (app) app.innerHTML = "Loading";

authControl(async (user) => {
  if (user) {
    await bookmark(user);
  } else {
    signUpForm();
  }
});
