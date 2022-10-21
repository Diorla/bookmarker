import { ThemeProvider } from "bookmarker-ui";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserProvider from "./userContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>
);
