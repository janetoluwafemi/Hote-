import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAnv-JJ-Mf6j2eX2nsbrL5zFagI26RLMlc",
    authDomain: "hotel-eff73.firebaseapp.com",
    projectId: "hotel-eff73",
    storageBucket: "hotel-eff73.firebasestorage.app",
    messagingSenderId: "242538633313",
    appId: "1:242538633313:web:e0f681ae4023bcea3c7220",
    measurementId: "G-VQV26C3ESQ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();