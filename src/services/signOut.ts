import { getAuth } from "firebase/auth";
import createFirebaseApp from "../firebaseApp";

const signOut = () => {
  const app = createFirebaseApp();
  const auth = getAuth(app);
  return confirm("Are you sure you want to logout")
    ? auth.signOut()
    : Promise.resolve();
};

export default signOut;
