import PropTypes from "prop-types";
const SingleSlider = ({ title }) => {
  return (
    <div
      className="h-screen flex justify-center items-center flex-col w-full"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
    >
      <h1
        className={`text-3xl font-popins lg:text-8xl md:text-6xl sm:text-4xl text-white`}
      >
        {title}
      </h1>
    </div>
  );
};

SingleSlider.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SingleSlider;
