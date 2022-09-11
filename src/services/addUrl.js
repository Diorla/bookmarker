// @ts-check
import { getFirestore, setDoc, doc } from "firebase/firestore";

/**
 * @param {string} userId
 * @param {any} data
 * @param {string} docId
 */
const addUrl = async (userId, data, docId) => {
  const db = getFirestore();
  const docRef = doc(db, `users/${userId}/links`, docId);

  //TODO: Update the folders
  /**
   * Update the users/folders array, it will be a merge
   * So that there won't be a duplicate
   */
  return setDoc(docRef, { id: docId, ...data }, { merge: true });
};

export default addUrl;
