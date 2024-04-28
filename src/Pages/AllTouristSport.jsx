import TouristSportCard from "../components/TouristSportCard";
import { useEffect, useState } from "react";

const AllTouristSport = () => {
  const [touristSports, setTouristSports] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <div className="container mx-auto px-4 mt-20 mb-60">
        {loading && (
          <div className="text-center">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
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
