import PropTypes from "prop-types";
const CountryInfo = ({ country, idx }) => {
  //   if (Array.isArray(country.capital))
  const arrayCheck = Array.isArray(country.capital);
  const capitalName = arrayCheck ? country.capital[0] : "none";
  //   console.log(country);

  return (
    <div>
      <div className="bg-sky-50 py-8 pl-8 rounded-lg">
        <img className="w-32 h-20" src={country.flags.png} alt="" />
        <p>
          <span className="font-bold">Serial:</span> {idx + 1}
        </p>
        <h1>
          <span className="font-bold">Name:</span> {country.name.common}
        </h1>
        <p>
          <span className="font-bold">Capital:</span> {capitalName}
        </p>
        <h1>
          <span className="font-bold">Area:</span> {country.area} km
          <sup>2</sup>
        </h1>
      </div>
    </div>
  );
};

CountryInfo.propTypes = {
  country: PropTypes.object,
  idx: PropTypes.number,
};

export default CountryInfo;

// border border-solid border-red-500
