import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import "../index.css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
