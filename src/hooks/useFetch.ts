/** @format */

import React, { useEffect, useState } from "react";

const useFetch = (url, mapCountriesDataAsRequired) => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);

  const fetchCountries = async () => {
    setIsFetching(true);
    const countriesData = await fetch(url, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "access-control-allow-origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const parsedCountriesData = await countriesData.json();
    if (mapCountriesDataAsRequired) {
      const countriesWithRequiredFieldsOnly = parsedCountriesData.map(
        (country) => ({
          name: country.name.common,
          flag: country.flag,
        })
      );
      setData(countriesWithRequiredFieldsOnly);
    } else {
      setData(parsedCountriesData);
    }
    setIsFetching(false);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return [data, isFetching];
};

export default useFetch;
