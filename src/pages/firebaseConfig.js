import firebase from "firebase"; //import firebase modules

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCe3FYMK029VdgFfLxNZtzhuQViNv0-QMM",
authDomain: "cs353-97031.firebaseapp.com",
projectId: "cs353-97031",
storageBucket: "cs353-97031.appspot.com",
messagingSenderId: "599058588424",
appId: "1:599058588424:web:93f4165ffffb3cfe92c2bd",
measurementId: "G-RVJW79KLCG"};

const fire = firebase.initializeApp(firebaseConfig);
//initialize instance of firebase for the application

export default firebase;
