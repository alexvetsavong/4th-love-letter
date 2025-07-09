import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import Navbar from "./Navbar.tsx";

function Root() {
  return (
    <StrictMode>
      <Navbar />
      <div className="spacer"></div>
      <App />
    </StrictMode>
  );
}

function Letter() {
  return (
    <StrictMode>
      <Navbar />
      <div className="spacer"></div>
      <h1>Nothing to see here yet!</h1>
    </StrictMode>
  );
}

let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
  { path: "/letter", Component: Letter },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
