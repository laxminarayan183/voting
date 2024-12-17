import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routers/router";
import { RouterProvider } from "react-router-dom";
import "sweetalert2/dist/sweetalert2.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
