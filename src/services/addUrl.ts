import { getFirestore, setDoc, doc } from "firebase/firestore";
import TabInfoProps from "../containers/home/TabInfoProps";

const addUrl = async (userId: string, data: TabInfoProps, docId: string) => {
  const db = getFirestore();
  const docRef = doc(db, `users/${userId}/links`, docId);

  const {
    title = "",
    url = "",
    tags = [],
    favicon = "",
    description = "",
    collection = "",
  } = data;

  return setDoc(
    docRef,
    { id: docId, title, url, tags, favicon, description, collection },
    { merge: true }
  );
};

export default addUrl;
