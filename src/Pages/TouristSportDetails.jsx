import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThemeContext } from "../ContextProvider/ThemeContext";

const TouristSportDetails = () => {
  const { touristSportID } = useParams();
  const [touristSport, setTouristSport] = useState({});
  const [loading, setLoading] = useState(true);
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://assinment-10-server-ten.vercel.app/tourist-sports/${touristSportID}`,
        );
        const touristSportData = await res.json();
        console.log(touristSportData);
        if (touristSportData) {
          setTouristSport(touristSportData);
        } else {
          setTouristSport({});
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [touristSportID]);
  return (
    <>
      <div className="container mx-auto px-4">
        {loading && (
          <div className="text-center">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
        <div
          className={`details lg:w-1/2 md:w-4/5 w-full p-8 mx-auto my-20 ${
            isDarkMode ? "bg-dim-black" : "bg-white"
          } ${isDarkMode ? "text-white" : "text-light-black"} rounded-xl`}
        >
          <img
            src={touristSport.image_URL}
            alt=""
            className="w-full rounded-xl"
          />
          <div className="touristSportDetails space-y-4 mt-8 font-popins">
            <div className="py-4 space-y-4">
              <h1 className="md:text-6xl text-5xl">
                {touristSport.tourists_spot_name}
              </h1>
              <p className="text-2xl">
                <span className="font-bold">Country:</span>{" "}
                {touristSport.country_Name}
              </p>
              <p className="text-base">{touristSport.short_description}</p>
            </div>
            <p className="text-xl">
              <span className="font-bold">Location:</span>{" "}
              {touristSport.location}
            </p>
            <p className="text-xl">
              <span className="font-bold">Seasonality:</span>{" "}
              {touristSport.seasonality}
            </p>
            <p className="text-xl">
              <span className="font-bold">Travel Time:</span>{" "}
              {touristSport.travel_time}
            </p>
            <p className="text-xl">
              <span className="font-bold">Average Cost:</span>{" "}
              {touristSport.average_cost}
            </p>
            <p className="text-xl">
              <span className="font-bold">Visitors Per Year:</span>{" "}
              {touristSport.totalVisitorsPerYear}
            </p>
            <button
              onClick={() => navigate(-1)}
              className={`btn btn-outline ${
                isDarkMode ? "text-white" : "text-light-black"
              } `}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TouristSportDetails;
