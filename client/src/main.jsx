// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter} from "react-router-dom";
import { AppContextProvider } from "./context/AppContext.jsx";
import {ClerkProvider} from '@clerk/clerk-react'
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </ClerkProvider>
    </HashRouter>
  </React.StrictMode>
);
