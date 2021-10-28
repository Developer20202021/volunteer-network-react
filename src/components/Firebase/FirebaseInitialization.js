import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
export const firebaseInitialization =()=>{
    initializeApp(firebaseConfig);
}
