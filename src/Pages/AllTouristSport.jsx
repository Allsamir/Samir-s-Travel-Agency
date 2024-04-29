import { ThemeContext } from "../ContextProvider/ThemeContext";
import TouristSportCard from "../components/TouristSportCard";
import { useContext, useEffect, useState } from "react";

const AllTouristSport = () => {
  const [touristSports, setTouristSports] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/tourist-sports");
        const result = await res.json();
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
    fetchData();
  }, []);

  const fetchDataInAscendingOrder = () => {
    fetch("http://localhost:3000/tourist-sports/ascendingOrder")
      .then((res) => res.json())
      .then((result) => {
        setTouristSports(result);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="container mx-auto px-4 mt-12 mb-60">
        {loading && (
          <div className="text-center">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
        <div className="text-center mb-12">
          <div className={`dropdown `}>
            <div
              tabIndex={0}
              role="button"
              className={`btn btn-outline ${
                isDarkMode ? "text-white" : "text-light-black"
              } m-1`}
            >
              Sort Average Cost
            </div>
            <ul
              tabIndex={0}
              className={`dropdown-content ${
                isDarkMode ? "bg-white text-black" : "bg-black text-white"
              } z-40 menu p-2 shadow rounded-box w-52`}
            >
              <li>
                <a onClick={fetchDataInAscendingOrder}>Ascending Order</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
          {touristSports.map((touristSport, index) => (
            <TouristSportCard key={index} touristSport={touristSport} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllTouristSport;
