// Initialize Cloud Firestore through Firebase
import { base64Decode } from "@firebase/util"
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import firebaseConfig from "./firebaseConfig"

const firebaseApp = initializeApp(firebaseConfig)
firebaseApp.name

const db = getFirestore()

export default db
