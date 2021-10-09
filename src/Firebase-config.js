import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDG-XI5a0MtDtT1M4rBiftCUngtKYY1PUk",
    authDomain: "react-restaurant-bdec9.firebaseapp.com",
    projectId: "react-restaurant-bdec9",
    storageBucket: "react-restaurant-bdec9.appspot.com",
    messagingSenderId: "720090354210",
    appId: "1:720090354210:web:9ec26e5b1a14a7e023b07b",
    measurementId: "G-41ZMY20EV1"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);