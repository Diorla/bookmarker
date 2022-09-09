import { initializeApp, getApps } from "firebase/app";

const firebaseApp = () => {
  const clientCredentials = {
    apiKey: "AIzaSyCQ0F8yhR16Y3y8IGgFGNltgXDVJ2XJNW8",
    authDomain: "crss-brwsr-bkmrk.firebaseapp.com",
    projectId: "crss-brwsr-bkmrk",
    storageBucket: "crss-brwsr-bkmrk.appspot.com",
    messagingSenderId: "965938222051",
    appId: "1:965938222051:web:08fca67665693d709d06d6",
    measurementId: "G-KTDXDQZ0DC",
  };

  if (getApps().length <= 0) {
    const app = initializeApp(clientCredentials);
    return app;
  }
};

export default firebaseApp;
