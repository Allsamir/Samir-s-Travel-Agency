import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import "../index.css";
import { ThemeProvider } from "../ContextProvider/ThemeContext";
import Home from "../Pages/Home";
import AllTouristSport from "../Pages/AllTouristSport";
import AddTouristsSpot from "../Pages/AddTouristsSpot";
import MyList from "../Pages/MyList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeProvider>
        <App />
      </ThemeProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-tourist-sports",
        element: <AllTouristSport />,
      },
      {
        path: "/add-tourist-sports",
        element: <AddTouristsSpot />,
      },
      {
        path: "/my-list",
        element: <MyList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
