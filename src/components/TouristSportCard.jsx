import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const TouristSportCard = ({ touristSport }) => {
  const x = "Hi";
  x.charAt(0).toUpperCase();
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
          <h2 className="card-title text-white font-popins">
            {touristSport.tourists_spot_name}
          </h2>
          <p className="text-white">
            Country:{" "}
            <span className="font-bold">{touristSport.country_Name}</span>{" "}
            <br />
            <span> Location: </span>{" "}
            <span className="font-bold">{touristSport.location}</span>
            <br />
            <span> Seasonality: </span>{" "}
            <span className="font-bold">
              {touristSport.seasonality.charAt(0).toUpperCase() +
                touristSport.seasonality.slice(1)}
            </span>
            <br />
            <span> Travel Time: </span>{" "}
            <span className="font-bold">{touristSport.travel_time}</span>
            <br />
            <span> Average Cost: </span>{" "}
            <span className="font-bold">{touristSport.average_cost}</span>
            <br />
            <span> Total Visitors Per Year: </span>{" "}
            <span className="font-bold">
              {touristSport.totalVisitorsPerYear}
            </span>
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
