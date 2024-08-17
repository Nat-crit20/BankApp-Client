import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QuickStartProvider } from "./Context.tsx";

import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QuickStartProvider>
      <App />
    </QuickStartProvider>
  </StrictMode>
);
