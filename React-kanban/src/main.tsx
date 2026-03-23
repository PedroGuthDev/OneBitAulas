import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import App from "./App";
import { TaskProvider } from "./contexts/TaskProvider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme appearance="dark">
      <TaskProvider>
        <App />
      </TaskProvider>
    </Theme>
  </StrictMode>,
);
