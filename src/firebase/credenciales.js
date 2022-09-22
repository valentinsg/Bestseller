import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyC13tVBPTRwGnW-EStkYzaMnQosVBriwXo",
    authDomain: "bestseller-f3bc5.firebaseapp.com",
    projectId: "bestseller-f3bc5",
    storageBucket: "bestseller-f3bc5.appspot.com",
    messagingSenderId: "123849497363",
    appId: "1:123849497363:web:1288ee3ecf4b57330558e6",
}

const firebaseApp = initializeApp (firebaseConfig);

export default firebaseApp;