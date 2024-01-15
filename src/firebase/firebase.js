import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCQG5H7AYziIcx3CJ5Mk4qkJU4-WZuTZ0s",
    authDomain: "exam-7d83a.firebaseapp.com",
    projectId: "exam-7d83a",
    storageBucket: "exam-7d83a.appspot.com",
    messagingSenderId: "876108831197",
    appId: "1:876108831197:web:2320bcdbe5a817df627e34"
  };

  const app = initializeApp(firebaseConfig)

export const auth = getAuth()

// Created by imranceek