import { createHashRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

import { App } from "./pages/pages.tsx";
import "./index.css";

const router = createHashRouter([
  { path: "/", Component: App },
  { path: "/letter", Component: App },
  { path: "/joke", Component: App },
]);

const provider = <RouterProvider router={router} />;

let root = createRoot(document.getElementById("root")!);
root.render(provider);
