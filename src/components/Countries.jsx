import PropTypes from "prop-types";
const Countries = ({ country }) => {
  console.log(country);
  return (
    <div className="card shadow-xl image-full">
      <figure>
        <img src={country.image_URL} alt="Shoes" className="w-full" />
      </figure>
      <div className="card-body font-popins">
        <h2 className="card-title text-white text-3xl">
          {country["country_Name"]}
        </h2>
        <p className="text-white">{country.short_description}</p>
      </div>
    </div>
  );
};
Countries.propTypes = {
  country: PropTypes.object.isRequired,
};

export default Countries;
