import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBofrfwPqFXSoJP7ODlIDjMTvrE0wSTKrE",
  authDomain: "miniblog-fa0cc.firebaseapp.com",
  projectId: "miniblog-fa0cc",
  storageBucket: "miniblog-fa0cc.appspot.com",
  messagingSenderId: "1052759085368",
  appId: "1:1052759085368:web:b753b5bb9b7d9aa430f1cd",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
