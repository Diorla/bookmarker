import createElement from "../modules/createElement";
import { render } from "../render";
import signInWithEmail from "../services/signInWithEmail";
import signUpForm from "./signUpForm";
export default function signInForm() {
  const innerHTML = `
    <div class="form">
      <div class="form-control">
        <label for="user_email">Email</label>
        <input type="email" name="user_email" id="user_email" />
      </div>
      <div class="form-control">
        <label for="pwd">Password</label>
        <input type="password" name="pwd" id="pwd" />
      </div>
      <div id="error-div"></div>
      <div>
        <button class="btn-link" href="#" id="old-member-button">New member?</button>
      </div>
      <button id="login">Sign in</button>
    </div>
  `;
  const elem = createElement({
    tagName: "div",
    innerHTML,
  });
  render(elem);

  document.getElementById("login")?.addEventListener("click", () => {
    const email = (document.getElementById("user_email") as HTMLInputElement)
      ?.value;
    const password = (document.getElementById("pwd") as HTMLInputElement)
      ?.value;

    if (!email) {
      document.getElementById("error-div").textContent = "Please provide email";
    } else if (!password) {
      document.getElementById("error-div").textContent =
        "Please provide password";
    } else {
      signInWithEmail({ email, password }).catch((err) => {
        document.getElementById("error-div").textContent = err.message;
      });
    }
  });
  document
    .getElementById("old-member-button")
    ?.addEventListener("click", () => {
      signUpForm();
    });
}
