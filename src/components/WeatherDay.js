import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

export default function WeatherDay(props) {
  const { weather } = props;
  const day = new Date(weather.applicable_date).getDay();

  return (
    <Col xs={12} sm={6} md={4} lg={2} className="text-center mt-4">
      <div className="border rounded p-3">
        <p>{weekday[day]}</p>
        <img className="w-50" alt="Weather icon" src={`https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`} />
        <p className="mt-3 mb-0">Min: {parseInt(weather.min_temp)}</p>
        <p className="mb-0">Max: {parseInt(weather.max_temp)}</p>
      </div>
    </Col>
  )
}

WeatherDay.propTypes = {
  weather: PropTypes.shape({
    weather_state_name: PropTypes.string.isRequired,
    weather_state_abbr: PropTypes.string.isRequired,
    applicable_date: PropTypes.string.isRequired,
    min_temp: PropTypes.number.isRequired,
    max_temp: PropTypes.number.isRequired
  })
};
