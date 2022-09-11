import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function signUpWithEmail({ email, password }) {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
}
