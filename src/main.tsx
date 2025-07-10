import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, Letter } from "./pages/pages.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
  { path: "/letter", Component: Letter },
  { path: "/joke", Component: Letter },
]);

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
