import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DataTable from "./pages/DataTable";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataTable />
  </StrictMode>
);
