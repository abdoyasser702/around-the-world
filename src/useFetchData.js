import { useState, useEffect } from "react";

export const useFetchData = (country) => {
  const [result, setResult] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (country) {
      fetchDataFromAPI();
    } else {
      fetchDataFromLocalStorage();
    }
  }, []);
  const fetchDataFromAPI = () => {
    let url =
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital";
    setIsLoading(true);
    if (country) {
      url = `https://restcountries.com/v3.1/name/${country}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (country) {
          //Country page
          setResult(data[0]);
        } else {
          //Home page
          setResult(data);
          setFilteredCountries(data);
          localStorage.setItem("countries", JSON.stringify(data));
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  const fetchDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("countries"));
    if (data) {
      setResult(data);
      setFilteredCountries(data);
    } else {
      fetchDataFromAPI();
    }
  };

  return {
    result,
    filteredCountries,
    isLoading,
    isError,
    setFilteredCountries,
  };
};
