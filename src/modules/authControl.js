// @ts-check
import firebaseApp from "../firebaseApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const app = firebaseApp();
const auth = getAuth(app);

/**
 * For managing user info
 * @param {(arg0: import("@firebase/auth").User | null) => void} handleUser
 */
const authControl = (handleUser) => {
  const unsubscriber = onAuthStateChanged(auth, async (user) => {
    handleUser(user);
  });
  return unsubscriber;
};

export default authControl;
