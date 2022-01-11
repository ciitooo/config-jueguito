import { initializeApp } from '@firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";


const Config = {
  apiKey: "AIzaSyAr2XlX4RpxuWiMz9Ue8iCwl1F8KHR97Ws",
  authDomain: "app-crud-vue.firebaseapp.com",
  databaseURL: "https://app-crud-vue-default-rtdb.firebaseio.com",
  projectId: "app-crud-vue",
  storageBucket: "app-crud-vue.appspot.com",
  messagingSenderId: "563273941914",
  appId: "1:563273941914:web:37f79ac924c55e63a5f023"
};

const app = initializeApp(Config);
const auth = getAuth(app);
const db = getDatabase(app)

export {auth, db}

