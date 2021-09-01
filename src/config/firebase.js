import firebase from 'firebase' ;
import 'firebase/auth'
import 'firebase/firestore'
var config = {
    apiKey: "AIzaSyDJ0EVkFbLwP00baGxIvlsEUzyQmDnRnhE",
    authDomain: "ooad-71ac2.firebaseapp.com",
    databaseURL: "https://ooad-71ac2.firebaseio.com",
    projectId: "ooad-71ac2",
    storageBucket: "ooad-71ac2.appspot.com",
    messagingSenderId: "273953977690",
    appId: "1:273953977690:web:0c6eafe213d4077ba1ef63",
    measurementId: "G-NQ3BY6YRL3"
};
const fire = firebase.initializeApp(config) ;
 export const auth = fire.auth() ;
 export const db = fire.firestore() ;
export default fire;
