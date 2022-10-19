import { useEffect, useState } from "react";
import firebaseApp from "../firebaseApp";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";

const app = firebaseApp();
const auth = getAuth(app);

const getCollections = async (
  userId: string,
  callback: (args: string[]) => void
) => {
  const db = getFirestore();
  const docRef = doc(db, `users/${userId}`);

  onSnapshot(docRef, (doc) => {
    const { collections = [] } = doc.data() as { collections: string[] };
    callback(collections);
  });
};

export interface UpdatedUser extends User {
  collections: string[];
}

export default function useUser() {
  const [user, setUser] = useState<UpdatedUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, async (user) => {
      if (user) {
        getCollections(user?.uid, (collections = []) => {
          setUser({ ...user, collections });
          setLoading(false);
        });
      } else {
        setLoading(false);
      }
    });

    return () => unsubscriber();
  }, []);
  return { user, loading };
}
