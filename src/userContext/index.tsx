import { useState, useEffect, useContext } from "react";
import firebaseApp from "../firebaseApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import getCollections from "./getCollections";
import initialUser from "./initialUser";
import UserContext from "./userContext";

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState(initialUser);
  const [loadingUser, setLoadingUser] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const app = firebaseApp();
    const auth = getAuth(app);
    const unsubscriber = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (currentUser) {
          getCollections(currentUser.uid, (collections = []) => {
            setUser({ ...currentUser, collections });
            setLoadingUser(false);
          });
        } else {
          setUser(initialUser);
          setLoadingUser(false);
        }
      } catch (error) {
        setError(error as Error);
        setLoadingUser(false);
      }
    });

    return () => unsubscriber();
  }, []);

  return (
    <UserContext.Provider value={{ user, loadingUser, error }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
