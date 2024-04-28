import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const TouristSportCard = ({ touristSport }) => {
  return (
    <>
      <div className={`card bg-base-100 shadow-xl text-white image-full`}>
        <figure>
          <img
            src={touristSport.image_URL}
            alt={touristSport.tourists_spot_name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">
            {touristSport.tourists_spot_name}
          </h2>
          <p className="text-white">
            Country:{" "}
            <span className="font-bold">{touristSport.country_Name}</span>
          </p>
          <div className="card-actions justify-end">
            <Link to={`/tourist-sport/${touristSport._id}`}>
              <button className={`btn btn-outline text-white`}>
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

TouristSportCard.propTypes = {
  touristSport: PropTypes.object.isRequired,
};

export default TouristSportCard;
