import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function signUpWithEmail({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
}
