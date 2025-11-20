import { db } from "@/app/utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  try {
    const results = await getDocs(collection(db, "users", userId, "items"));
    return results.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
  } catch (error) {
    console.error(`Error getting items from the user ${userId}`, error);
  }
};

const addItem = async (userId, item) => {
  try {
    const addedItem = await addDoc(collection(db, "user", userId, "items"), {
      name: item,
    });
    return addedItem.id;
  } catch (error) {
    console.error(`Error adding ${item} to the user ${userId}`);
  }
};
