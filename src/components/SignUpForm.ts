import createComponent from "../modules/createComponent";
import { render } from "../render";
import signUpWithEmail from "../services/signUpWithEmail";
import SignInForm from "./SignInForm";

export default function SignUpForm() {
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
      <div class="form-control">
        <label for="re_pwd">Confirm Password</label>
        <input type="password" name="re_pwd" id="re_pwd" />
      </div>
      <div id="error-div"></div>
      <div>
        <button class="btn-link" id="new-member-button">Already a member?</button>
      </div>
      <button id="create-account">Sign up</button>
    </div>
  `;
  const elem = createComponent({
    tagName: "div",
    innerHTML,
  });
  render(elem);

  document
    .getElementById("new-member-button")
    ?.addEventListener("click", () => {
      SignInForm();
    });

  document.getElementById("create-account")?.addEventListener("click", () => {
    const email = (document.getElementById("user_email") as HTMLInputElement)
      ?.value;
    const password = (document.getElementById("pwd") as HTMLInputElement)
      ?.value;
    const re_pwd = (document.getElementById("re_pwd") as HTMLInputElement)
      ?.value;

    if (!email) {
      document.getElementById("error-div").textContent = "Please provide email";
    } else if (!password) {
      document.getElementById("error-div").textContent =
        "Please provide password";
    } else if (!re_pwd) {
      document.getElementById("error-div").textContent =
        "Please confirm password";
    } else if (password !== re_pwd) {
      document.getElementById("error-div").textContent =
        "Password doesn't match";
    } else {
      signUpWithEmail({ email, password }).catch((err) => {
        document.getElementById("error-div").textContent = err.message;
      });
    }
  });

  document.querySelectorAll("input").forEach((item) => {
    item.addEventListener("focus", () => {
      document.getElementById("error-div").textContent = "";
    });
  });
}
