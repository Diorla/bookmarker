// @ts-check
import { getAuth } from "firebase/auth";
import createFirebaseApp from "../firebaseApp";

const signOut = () => {
  const app = createFirebaseApp();
  const auth = getAuth(app);
  return auth.signOut();
};

export default signOut;
