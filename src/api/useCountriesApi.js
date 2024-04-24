"use client";

import { useState } from "react";

function useCountriesApi() {
  const [isLoading, setIsLoading] = useState(false);
  const [countryData, setCountryData] = useState([]);

  async function getCountry(country) {
    try {
      setIsLoading(true);
      const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
      if (!res.ok) throw new Error("Country not found");
      const data = await res.json();

      setCountryData(data);
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  // fetch(`https://restcountries.com/v3.1/name/deutschland`)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  return { getCountry, isLoading, countryData };
}

export default useCountriesApi;
