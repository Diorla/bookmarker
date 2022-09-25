import { useEffect, useState } from "react";
import firebaseApp from "../firebaseApp";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const app = firebaseApp();
const auth = getAuth(app);

export default function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscriber();
  }, []);
  return { user, loading };
}
