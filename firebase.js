import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDdwfCudCpZ61VxcrHWpii_vO-c8-GzFk8",
  authDomain: "react-note-c70b1.firebaseapp.com",
  projectId: "react-note-c70b1",
  storageBucket: "react-note-c70b1.appspot.com",
  messagingSenderId: "229694356758",
  appId: "1:229694356758:web:cc88edcbeec91a575ba437"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")