import { getFirestore, doc, arrayUnion, setDoc } from "firebase/firestore";

const addToCollection = async (userId: string, collection: string) => {
  const db = getFirestore();
  const docRef = doc(db, `users/${userId}`);

  return setDoc(
    docRef,
    { collections: arrayUnion(collection.toLowerCase()) },
    { merge: true }
  );
};

export default addToCollection;
