import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Countries = ({ country }) => {
  return (
    <Link to={`/country/${country.country_Name}`}>
      <div className="card shadow-xl image-full">
        <figure>
          <img
            src={country.image_URL}
            alt={country.country_Name}
            className="w-full"
          />
        </figure>

        <div className="card-body font-popins">
          <h2 className="card-title text-white text-3xl">
            {country["country_Name"]}
          </h2>
          <p className="text-white">{country.short_description}</p>
        </div>
      </div>
    </Link>
  );
};
Countries.propTypes = {
  country: PropTypes.object.isRequired,
};

export default Countries;
