import { initializeApp, getApps } from "firebase/app";

const firebaseApp = () => {
  const clientCredentials = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
  };

  if (getApps().length <= 0) {
    const app = initializeApp(clientCredentials);
    return app;
  }
};

export default firebaseApp;

import.meta.env;
