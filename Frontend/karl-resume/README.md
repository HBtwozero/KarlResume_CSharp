https://www.youtube.com/watch?v=G_1_VEwXkQk&list=PLISG6SSQ9nqyuuTjr2cDApJlY9-K3jrn1&index=2

http://tavonline.net/html/mat/default/index.html#

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFwJm-lTBFPsnSIiFKw4lYAm06H9HRsjA",
  authDomain: "karl-resume-2021.firebaseapp.com",
  projectId: "karl-resume-2021",
  storageBucket: "karl-resume-2021.appspot.com",
  messagingSenderId: "504754857144",
  appId: "1:504754857144:web:883253b7cbfa565548804d",
  measurementId: "G-1KVFT2E2MY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);