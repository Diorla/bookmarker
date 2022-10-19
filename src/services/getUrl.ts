import {
  query,
  collection,
  where,
  getFirestore,
  getDocs,
  DocumentData,
} from "firebase/firestore";

export default async function getUrl(
  userId: string,
  url: string,
  callback: (arg: DocumentData[]) => void
) {
  const db = getFirestore();
  const q = query(
    collection(db, `users/${userId}/links`),
    where("url", "==", url)
  );
  const list: DocumentData[] = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    list.push(doc.data());
  });

  callback(list);
}
