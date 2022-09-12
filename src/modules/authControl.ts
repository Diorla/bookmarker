import firebaseApp from "../firebaseApp";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const app = firebaseApp();
const auth = getAuth(app);

const authControl = (handleUser: (arg0: User | null) => void) => {
  const unsubscriber = onAuthStateChanged(auth, async (user) => {
    handleUser(user);
  });
  return unsubscriber;
};

export default authControl;
