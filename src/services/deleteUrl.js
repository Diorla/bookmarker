// @ts-check
import { doc, deleteDoc, getFirestore } from "firebase/firestore";

/**
 * @param {string} userId
 * @param {string} docId
 */
export default function deleteUrl(userId, docId) {
  const db = getFirestore();
  const docRef = doc(db, `users/${userId}/links`, docId);

  return deleteDoc(docRef);
}
