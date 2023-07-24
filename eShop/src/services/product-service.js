import { db } from "../../config/firebase";
import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
  increment,
} from "firebase/firestore";

export const testDatabse = async () => {
  const querySnapshot = await getDocs(collection(db, "productCollection"));
  // console.log(querySnapshot);
  // querySnapshot.forEach((doc) => console.log(doc.id, doc.data()));
};
export const getAllProducts = async () => {
  const collectionRef = collection(db, "productCollection");
  const querySnapshot = await getDocs(collectionRef);
  // const data = querySnapshot.docs.map(doc => {
  //   const id = doc.id
  //   const data = doc.data()
  //   return {id, ...data}
  // })
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getProduct = async (id) => {
  const docRef = doc(db, "productCollection", id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    throw new Error("Product not found");
  }

  return { id: snapshot.id, ...snapshot.data() };
};

export const reduceProductCount = async (id) => {
  const docRef = doc(db, "productCollection", id);
  const updatedDoc = await updateDoc(docRef, {
    quantity: increment(-1),
  });
  return await getProduct(id);
};
