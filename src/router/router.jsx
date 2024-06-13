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
import ErrorPage from "../Pages/ErrorPage";
import ProtectedRoute from "../ProtectedRoutes/ProtectedRoute";
import TouristSportDetails from "../Pages/TouristSportDetails";
import UpdateTouristSport from "../Pages/UpdateTouristSport";
import CTouristSport from "../Pages/CTouristSport";
import ForgetPassword from "../Pages/ForgetPassword";

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
        element: (
          <ProtectedRoute>
            <AddTouristsSpot />
          </ProtectedRoute>
        ),
      },
      {
        path: "/tourist-sport/:touristSportID",
        element: (
          <ProtectedRoute>
            <TouristSportDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-list",
        element: (
          <ProtectedRoute>
            <MyList />
          </ProtectedRoute>
        ),
      },
      {
        path: "/update-tourist-sport/:touristSportID",
        element: (
          <ProtectedRoute>
            <UpdateTouristSport />
          </ProtectedRoute>
        ),
      },
      {
        path: "/country/:countryName",
        element: <CTouristSport />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
