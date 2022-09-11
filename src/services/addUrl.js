// @ts-check
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { v4 } from "uuid";

const addUrl = async (
  /** @type {string} */ userId,
  /** @type {any} */ data
) => {
  const db = getFirestore();
  const id = v4();
  const docRef = doc(db, `users/${userId}/links`, id);

  //TODO: Update the folders
  /**
   * Update the users/folders array, it will be a merge
   * So that there won't be a duplicate
   */
  return setDoc(docRef, { id, ...data }, { merge: true });
};

export default addUrl;
