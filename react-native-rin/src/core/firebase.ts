import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCXvcHIjErKBNq8Mn1ZvSt8pnin44guiTg",
    authDomain: "rin-react-native.firebaseapp.com",
    projectId: "rni-react-native",
    storageBucket: "rin-react-native.appspot.com",
    messagingSenderId: "334389690226",
    appId: "1:334389690226:ios:98346e3f52de47e051e7eb"
};

firebase.initializeApp(firebaseConfig);

export default firebase