import { initializeApp } from "firebase/app";
import { addDoc, collection, collection as fbCollection, getDocs, getFirestore } from "firebase/firestore";
import { ContactUsFormValuesType } from "./components/ui/contactUs/form/Form";

const firebaseConfig = {
  apiKey: 'AIzaSyBCoyY-OhJUimJaucRJs4mpHiodcbTYBCU',
  authDomain: 'ariestos-daa83.firebaseapp.com',
  projectId: 'ariestos-daa83',
  storageBucket: 'ariestos-daa83.appspot.com',
  messagingSenderId: '444829018738',
  appId: '1:444829018738:web:f6a767da32808ec27030eb',
  measurementId: 'G-2ZKD8W2W7M'
};

const app = initializeApp(firebaseConfig);
const fs = getFirestore(app);

export const itemsAPI = {
  get: async (collection: string) => {
    const itemsSnapshot = await getDocs(fbCollection(fs, collection));
    return itemsSnapshot.docs.map(d => d.data());
  },
};

export const customersAPI = {
  add: async (data: ContactUsFormValuesType) => {
    const docRef = await addDoc(collection(fs, "contactUs"), data);
    return !!docRef;
  }
}
