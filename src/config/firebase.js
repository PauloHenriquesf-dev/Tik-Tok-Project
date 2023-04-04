
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyD09WiEzlWaSe_YAXADqfqEIkhMuxC9Jk4",
  authDomain: "tiktok---jornada-d4d8f.firebaseapp.com",
  projectId: "tiktok---jornada-d4d8f",
  storageBucket: "tiktok---jornada-d4d8f.appspot.com",
  messagingSenderId: "39684952162",
  appId: "1:39684952162:web:a436136e4898d2ea4bc13b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export default db;