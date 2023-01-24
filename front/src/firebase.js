// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXT5fMhoVPFYB4rbf7-dGnxeyWrez0TN0",
  authDomain: "matching-app-1d776.firebaseapp.com",
  projectId: "matching-app-1d776",
  storageBucket: "matching-app-1d776.appspot.com",
  messagingSenderId: "853649940171",
  appId: "1:853649940171:web:b1dd2bacfb69e97f77c54e",
  measurementId: "G-MCSW4PSGGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;