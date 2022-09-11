// @ts-check
import {
  query,
  collection,
  where,
  getFirestore,
  getDocs,
} from "firebase/firestore";

/**
 * @param {string} userId
 * @param {string} url
 */
export default async function getUrl(userId, url) {
  const db = getFirestore();
  const q = query(
    collection(db, `users/${userId}/links`),
    where("url", "==", url)
  );
  const list = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((/** @type {{ data: () => any; }} */ doc) => {
    list.push(doc.data());
  });
  return list;
}
