import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";

const theme = {
  primaryLight: "#4db6ac",
  primary: "#00796b",
  primaryDark: "#004d40",
  secondaryLight: "#f06292",
  secondary: "#e91e63",
  secondaryDark: "#c2185b",
  white: "#ffffff",
  greyLight1: "#e4ebf5",
  greyLight2: "#c8d0e7",
  greyLight3: "#bec8e4",
  greyDark: "#9baacf",
  black: "#000000",
  error: "#f44336",
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
