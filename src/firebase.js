import firebase from 'firebase';
  
const firebaseConfig = {
    apiKey: "AIzaSyDFcqz56aFzxMNowaFAfgzlHUY6pm5dUoI",
    authDomain: "aceug-a6e00.firebaseapp.com",
    projectId: "aceug-a6e00",
    storageBucket: "aceug-a6e00.appspot.com",
    messagingSenderId: "811897481712",
    appId: "1:811897481712:web:936e3c9bc68451e9be1535",
    measurementId: "G-TQ8V0S15KY",
};
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};