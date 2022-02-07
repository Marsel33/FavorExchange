import { initializeApp } from 'firebase/app'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAoEQbidEDFZ7sJizr8aPGyX2LSa_RLxSQ",
  authDomain: "favorexchange-832da.firebaseapp.com",
  projectId: "favorexchange-832da",
  storageBucket: "favorexchange-832da.appspot.com",
  messagingSenderId: "637711746147",
  appId: "1:637711746147:web:ca3e36f49c648f4a4b6456",
  measurementId: "G-YBS2H5RGS4"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
