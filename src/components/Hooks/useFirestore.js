import { useState, useEffect } from "react";
import { projectFirestore } from "../Firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState();

  useEffect(() => {
    // update listener that update the grid when a new image is uploaded
    const unsub = projectFirestore
      .collection(collection)
      //.orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
    // cleanup function, unsubscribe from the collection when we no longer use it
    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
