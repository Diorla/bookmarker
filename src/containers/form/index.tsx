import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Form() {
  const [isNew, setIsNew] = useState(false);
  if (isNew) return <SignUp toggleForm={() => setIsNew(!isNew)} />;
  return <SignIn toggleForm={() => setIsNew(!isNew)} />;
}
