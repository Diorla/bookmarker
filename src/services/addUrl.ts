import { getFirestore, setDoc, doc } from "firebase/firestore";

const addUrl = async (
  userId: string,
  data: { title: string; url: string; tags: string[]; favicon: string },
  docId: string
) => {
  const db = getFirestore();
  const docRef = doc(db, `users/${userId}/links`, docId);

  return setDoc(docRef, { id: docId, ...data }, { merge: true });
};

export default addUrl;
