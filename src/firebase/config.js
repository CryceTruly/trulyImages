import firebase from "firebase";

const config={
    apiKey: "AIzaSyChbxb5WZr2eCHDktcWO_aKhGU4mdPG0vM",
    authDomain: "myimagesapp.firebaseapp.com",
    databaseURL: "https://myimagesapp.firebaseio.com",
    projectId: "myimagesapp",
    storageBucket: "myimagesapp.appspot.com",
    messagingSenderId: "33802700506",
    appId: "1:33802700506:web:3e77b262d49fef98"
}

export const firebaseui={
    signInFlow:"popup",
    signInOptions:[
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ]
}
firebase.initializeApp(config);
export default firebase;