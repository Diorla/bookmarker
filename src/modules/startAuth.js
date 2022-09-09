// @ts-check
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import createFirebaseApp from "../firebaseApp";

/**
 * This will enable login
 * @param {boolean} interactive - It should be true
 */
export default function startAuth(interactive) {
  chrome.identity.getAuthToken(
    { interactive: !!interactive },
    function (token) {
      if (chrome.runtime.lastError && !interactive) {
        console.log("It was not possible to get a token programmatically.");
      } else if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else if (token) {
        const credential = GoogleAuthProvider.credential(null, token);

        const app = createFirebaseApp();
        const auth = getAuth(app);

        signInWithCredential(auth, credential).catch(function (error) {
          if (error.code === "auth/invalid-credential") {
            chrome.identity.removeCachedAuthToken(
              { token: token },
              function () {
                startAuth(interactive);
              }
            );
          }
        });
      } else {
        console.error("The Oauth Token was null");
      }
    }
  );
}
