// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, setDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNVSZV-qjcbOo_AxpI1o_Jso_J0_A1h7M",
  authDomain: "checkpointfinal-3e504.firebaseapp.com",
  projectId: "checkpointfinal-3e504",
  storageBucket: "checkpointfinal-3e504.appspot.com",
  messagingSenderId: "551182197517",
  appId: "1:551182197517:web:f925118236102459f0c644",
  measurementId: "G-LG051JMY94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function subirData(username:any,favoriteColor:any,favoriteLetter:any) {
    await setDoc(doc(db, "User"), {
        name: " Natalia",
        color: "blue",
        letter: "N"
    });
}