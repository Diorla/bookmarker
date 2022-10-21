import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

export default function signUpWithEmail({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      sendEmailVerification(user);
    }
  );
}
