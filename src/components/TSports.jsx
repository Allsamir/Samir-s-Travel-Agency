import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ContextProvider/ThemeContext";
const TSports = ({ touristSport }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="card lg:card-side shadow-xl">
      <figure style={{ alignItems: "unset" }}>
        <img src={touristSport.image_URL} alt="Album" className="w-full" />
      </figure>
      <div className="card-body space-y-8">
        <h2 className="card-title text-2xl font-popins">
          {touristSport.tourists_spot_name}
        </h2>
        <p>{touristSport.short_description}</p>
        <div className="card-actions justify-start">
          <Link to={`/tourist-sport/${touristSport._id}`}>
            <button
              className={`btn btn-outline ${
                isDarkMode ? "text-white" : "text-dim-black"
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

TSports.propTypes = {
  touristSport: PropTypes.object.isRequired,
};

export default TSports;
