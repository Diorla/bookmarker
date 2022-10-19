import { Input, Link, Button } from "bookmarker-ui";
import { useState } from "react";
import signUpWithEmail from "../../services/signUpWithEmail";

export default function SignUp({ toggleForm }: { toggleForm: () => void }) {
  const initial = {
    email: "",
    password: "",
    repassword: "",
  };
  const [value, setValue] = useState(initial);

  const [error, setError] = useState(initial);

  const [formError, setFormError] = useState("");
  const submit = () => {
    const { email, password, repassword } = value;
    if (!email)
      setError({
        ...initial,
        email: "Please provide email",
      });
    else if (!password)
      setError({
        ...initial,
        password: "Please provide password",
      });
    else if (!repassword)
      setError({
        ...initial,
        repassword: "Please confirm your password",
      });
    else if (password !== repassword)
      setError({
        ...initial,
        repassword: "Password does not match",
      });
    else
      signUpWithEmail({ email, password }).catch((err) =>
        setFormError(err.message)
      );
  };
  return (
    <div>
      <Input
        label="Email"
        type="email"
        placeholder="example@email.com"
        value={value.email}
        errorText={error.email}
        onChange={(e: { target: { value: string } }) => {
          setValue({
            ...value,
            email: e.target.value,
          });
        }}
        onFocus={() => setError(initial)}
        style={{ marginBottom: 8 }}
      />
      <Input
        label="Password"
        type="password"
        placeholder="∗∗∗∗∗∗∗∗"
        value={value.password}
        errorText={error.password}
        onChange={(e: { target: { value: string } }) => {
          setValue({
            ...value,
            password: e.target.value,
          });
        }}
        onFocus={() => setError(initial)}
        style={{ marginBottom: 8 }}
      />
      <Input
        label="Confirm Password"
        type="password"
        placeholder="∗∗∗∗∗∗∗∗"
        value={value.repassword}
        errorText={error.repassword}
        onChange={(e: { target: { value: string } }) => {
          setValue({
            ...value,
            repassword: e.target.value,
          });
        }}
        onFocus={() => setError(initial)}
        style={{ marginBottom: 8 }}
      />
      <div>
        <Link onClick={toggleForm}>Already a member?</Link>
      </div>
      <div style={{ color: "red" }}>{formError}</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="primary" onClick={submit}>
          Sign up
        </Button>
      </div>
    </div>
  );
}
