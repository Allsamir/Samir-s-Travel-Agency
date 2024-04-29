import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TouristSportCard from "../components/TouristSportCard";
import { ThemeContext } from "../ContextProvider/ThemeContext";

const CTouristSport = () => {
  const { countryName } = useParams();
  const [CtouristSports, setCTouristSports] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isDarkMode } = useContext(ThemeContext);
  useEffect(() => {
    fetch(`http://localhost:3000/tourist-sports/country/${countryName}`)
      .then((res) => res.json())
      .then((result) => {
        setCTouristSports(result);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [countryName]);
  return (
    <>
      <div className="container mx-auto px-4 mt-20 mb-60">
        {loading && (
          <div className="text-center h-screen">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
        <div className="text-center mb-20">
          <h1
            className={`text-4xl font-popins font-bold md:text-6xl ${
              isDarkMode ? "text-white" : "text-dim-black"
            }`}
          >
            {countryName}&apos;s Tourist Sports
          </h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
          {CtouristSports.map((touristSport, index) => (
            <TouristSportCard key={index} touristSport={touristSport} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CTouristSport;
