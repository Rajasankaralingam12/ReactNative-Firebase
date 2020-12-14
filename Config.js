import  * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTh61evfQw2_UkQVJGSIvF4yFch59iE6A",
    authDomain: "react-native-91a7a.firebaseapp.com",
    projectId: "react-native-91a7a",
    storageBucket: "react-native-91a7a.appspot.com",
    messagingSenderId: "1030869245840",
    appId: "1:1030869245840:web:66600fbb11bfeb574c5d15",
    measurementId: "G-EV3V9N50KF"
  };

//   if (!firebase.apps.length) {
//     try {
//       firebase.initializeApp(firebaseConfig)
//     } catch (err) {
//         console.error("Firebase initialization error raised", err.stack)
//     }
//   }
let app = "";
if (!firebase.apps.length) {
   app = firebase.default.initializeApp(firebaseConfig);
}else {
  app =firebase.app(); // if already initialized, use that one
}
//let app = firebase.default.initializeApp(firebaseConfig);
//var database = firebase.database(app)
  export const db = app.database();