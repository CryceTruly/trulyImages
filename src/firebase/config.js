import firebase from "firebase";

const config={
    //Paste your firebase app config here
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