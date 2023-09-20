// import React from 'react';
// import PropTypes from 'prop-types';

import { useLoaderData } from "react-router-dom";
import CountryInfo from "./CountryInfo";

const Countries = () => {
  const countriesData = useLoaderData();
  console.log(countriesData);
  return (
    <div>
      {/* <h1 className="text-5xl text-center">Total countries data available for {countriesData.length} countries.</h1> */}
      <div className="w-11/12 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {countriesData.map((country, idx) => (
          <CountryInfo key={idx} country={country} idx={idx}></CountryInfo>
        ))}
      </div>
    </div>
  );
};

Countries.propTypes = {};

export default Countries;
