// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//console.log("process.env.NEXT_PUBLIC_FIREBASE_apiKey",process.env.NEXT_PUBLIC_FIREBASE_apiKey)
const firebaseApp = initializeApp({
    apiKey:process.env.NEXT_PUBLIC_FIREBASE_apiKey,
    authDomain:process.env.NEXT_PUBLIC_FIREBASE_authDomain,
    projectId:process.env.NEXT_PUBLIC_FIREBASE_projectId
});


export const auth = getAuth();


//export default firebase
