import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import AsyncSelect from 'react-select/async';

import WeatherContainer from './WeatherContainer';

const debounceTimeout = 300;
let timeout;

/**
 * Calls search API with searchString to fetch cities information
 * @param {string} searchString Search string
 * @returns {Array} Array of returned cities
 */
async function searchCities(searchString) {
  const response = await axios(
    `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${searchString}`
  );

  return response && response.data.map((city) => ({
    value: city.woeid,
    label: city.title
  }));
}

/**
 * Loads searched cities into AsyncSelect. Add debounce to prevent redundant search requests.
 * @param {*} searchString Search string to go to search for cities
 * @param {*} callback Callback to load the data into AsyncSelect
 */
function debouncedLoadCities(searchString, callback) {
  if (timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(async () => {
    const cities = await searchCities(searchString);
    callback(cities);
  }, debounceTimeout);
}

export default function Home() {
  const [city, setCity] = useState(null);

  return (<Container className="mt-5">
    <div className="w-50">
      <AsyncSelect placeholder="Search city..." className="select-box" loadOptions={debouncedLoadCities} onChange={(selectedCity) => {
        setCity(selectedCity);
      }} />
    </div>
    <div className="mt-3">
      {city && <WeatherContainer city={city} />}
    </div>
  </Container>);
}
