
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD_nMZU9VsfmE9K6NSNzPx8Ti081vbY3Ec",
  authDomain: "app-clase2-coder-react-gomez.firebaseapp.com",
  projectId: "app-clase2-coder-react-gomez",
  storageBucket: "app-clase2-coder-react-gomez.appspot.com",
  messagingSenderId: "941129006714",
  appId: "1:941129006714:web:bd6fa7364bdfe28ecfc5c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFireStoreApp = () =>{
    return app;
}

