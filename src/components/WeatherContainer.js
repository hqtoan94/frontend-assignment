import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import WeatherDay from './WeatherDay';

export default function WeatherContainer(props) {
  const { city } = props;
  const [consolidatedWeather, setConsolidatedWeather] = useState([]);
  const [isFetchingData, setIsFetchingData] = useState(false);

  useEffect(() => {
    const fetchConsolidatedWeather = async () => {
      const response = await axios(
        `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${city.value}/`
      );

      let consolidatedWeather = (response?.data?.consolidated_weather || []).slice(1, 6);
      setConsolidatedWeather(consolidatedWeather);
      setIsFetchingData(false);
    };

    setIsFetchingData(true);
    fetchConsolidatedWeather();
  }, [city.value]);

  return (<div>
    <h3 className="m-0">Five day weather forecast in: <i>{city.label}</i></h3>
    <div className="weather-container row justify-content-center mt-5">
      {isFetchingData ? (
        <p className="col-12">Fetching weather data</p>
      ) : consolidatedWeather.map(weather => (<WeatherDay key={weather.id} weather={weather} />))
      }
    </div>
  </div>)
}

WeatherContainer.propTypes = {
  city: PropTypes.exact({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  })
};
