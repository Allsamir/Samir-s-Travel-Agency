import { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "./ContextProvider/ThemeContext";
import "./index.css";
import Footer from "./components/Footer";

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
