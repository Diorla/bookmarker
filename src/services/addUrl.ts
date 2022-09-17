import { getFirestore, setDoc, doc } from "firebase/firestore";

interface UrlProps {
  title: string;
  url: string;
  tags: string[];
  favicon: string;
  description: string;
}

const addUrl = async (userId: string, data: UrlProps, docId: string) => {
  const db = getFirestore();
  const docRef = doc(db, `users/${userId}/links`, docId);

  return setDoc(docRef, { id: docId, ...data }, { merge: true });
};

export default addUrl;
