import { useContext, useEffect, useState } from "react";
import Slider from "../components/Slider";
import { ThemeContext } from "../ContextProvider/ThemeContext";
import TSports from "../components/TSports";
import Countries from "../components/Countries";
import Testimonial from "../components/Testimonial";
const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [touristSports, setTouristSports] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingC, setLoadingC] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "http://localhost:3000/tourist-sports/limitedSports",
        );
        const result = await res.json();
        console.log(result);
        if (result) {
          setTouristSports(result);
        } else {
          setTouristSports([]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchDataFromCountries = async () => {
      try {
        const res = await fetch("http://localhost:3000/countries");
        const result = await res.json();
        console.log(result);

        if (result) {
          setCountries(result);
        } else {
          setCountries([]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingC(false);
      }
    };

    fetchData();
    fetchDataFromCountries();
  }, []);
  return (
    <div>
      <Slider />

      <div className="container mx-auto px-4 my-32">
        <div
          className={`title text-4xl font-popins ${
            isDarkMode ? "text-white" : "text-dim-black"
          } text-center font-bold mb-16`}
        >
          Tourists Spots
        </div>
        {loading && (
          <div className="text-center">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {touristSports.map((touristSport, index) => (
            <TSports key={index} touristSport={touristSport} />
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 my-32">
        <div
          className={`title text-4xl font-popins ${
            isDarkMode ? "text-white" : "text-dim-black"
          } text-center font-bold mb-16`}
        >
          Countries
        </div>
        {loadingC && (
          <div className="text-center">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {countries.map((country, index) => (
            <Countries key={index} country={country} />
          ))}
        </div>
      </div>

      <div className="my-32">
        <div
          className={`title text-4xl font-popins ${
            isDarkMode ? "text-white" : "text-dim-black"
          } text-center font-bold mb-16`}
        >
          Our Image Gallery
        </div>
        <div className="text-center">
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default Home;
