import { doc, deleteDoc, getFirestore } from "firebase/firestore";

export default function deleteUrl(userId: string, docId: string) {
  const db = getFirestore();
  const docRef = doc(db, `users/${userId}/links`, docId);

  return deleteDoc(docRef);
}
