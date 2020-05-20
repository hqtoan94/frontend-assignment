import React from 'react';
import { render } from '@testing-library/react';
import WeatherDay from './WeatherDay';

const weather = {
  id: 4614983327416320,
  weather_state_name: "Heavy Rain",
  weather_state_abbr: "hr",
  applicable_date: "2020-05-20",
  min_temp: 27.9,
  max_temp: 33.815
};

test('renders correctly and without crashing', () => {
  const { container } = render(<WeatherDay weather={weather} />);
  expect(container).toMatchSnapshot();
});
