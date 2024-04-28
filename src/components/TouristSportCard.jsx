import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../ContextProvider/ThemeContext";
import { Link } from "react-router-dom";
const TouristSportCard = ({ touristSport }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`card lg:card-side  ${
        isDarkMode ? "bg-dim-black" : "bg-white"
      } ${isDarkMode ? "text-white" : "text-light-black"}  shadow-xl`}
    >
      <figure>
        <img src={touristSport.image_URL} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{touristSport.tourists_spot_name}</h2>
        <p>
          Average Cost:{" "}
          <span className="font-bold">{touristSport.average_cost}</span>
        </p>
        <p>
          Total Visitors Per Year:{" "}
          <span className="font-bold">{touristSport.totalVisitorsPerYear}</span>
        </p>
        <p>
          Travel Time:{" "}
          <span className="font-bold">{touristSport.travel_time}</span>
        </p>
        <p>
          Seasonality:{" "}
          <span className="font-bold">{touristSport.seasonality}</span>
        </p>
        <div className="card-actions justify-end">
          <Link to={`/tourist-sport/${touristSport._id}`}>
            <button
              className={`btn btn-outline ${
                isDarkMode ? "text-white" : "text-light-black"
              }`}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

TouristSportCard.propTypes = {
  touristSport: PropTypes.object.isRequired,
};

export default TouristSportCard;
