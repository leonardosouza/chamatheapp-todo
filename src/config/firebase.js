import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
