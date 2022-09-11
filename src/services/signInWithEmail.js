import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function signInWithEmail({ email, password }) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
}
