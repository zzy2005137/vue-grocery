// Initialize Cloud Firestore through Firebase

// import app from "firebase/app"
// import firebaseConfig from "./firebaseConfig"
// import "firebase/firestore"

// const firebaseApp = app.initializeApp(firebaseConfig)

// export default firebaseApp.firestore()

import firebase from "firebase"
import "firebase/firestore"
import firebaseConfig from "./firebaseConfig"
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp
