import React from 'react';
import { render } from '@testing-library/react';
import WeatherContainer from './WeatherContainer';

const city = {
  label: 'Ho Chi Minh City',
  value: 1252431
};

test('renders without crashing', () => {
  render(<WeatherContainer city={city} />);
});
