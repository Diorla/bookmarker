import { getFirestore, doc, updateDoc, arrayUnion } from "firebase/firestore";

const addToCollection = async (userId: string, collection: string) => {
  const db = getFirestore();
  const docRef = doc(db, `users/${userId}`);

  return updateDoc(docRef, {
    collections: arrayUnion(collection.toLowerCase()),
  });
};

export default addToCollection;
