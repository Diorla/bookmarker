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

  const {
    title = "",
    url = "",
    tags = [],
    favicon = "",
    description = "",
  } = data;

  return setDoc(
    docRef,
    { id: docId, title, url, tags, favicon, description },
    { merge: true }
  );
};

export default addUrl;
