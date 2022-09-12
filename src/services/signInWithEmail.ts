import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function signInWithEmail({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
}
