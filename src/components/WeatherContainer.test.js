import React from 'react';
import { render, screen, waitForElement } from '@testing-library/react';
import axios from 'axios'

import WeatherContainer from './WeatherContainer';
import { mockCityWeatherAPIResponse } from './__mocks__/apiResponse';

jest.mock('axios');

const city = {
  label: 'Ho Chi Minh City',
  value: 1252431
};

beforeEach(() => {
  axios.mockResolvedValueOnce(mockCityWeatherAPIResponse);
});

afterEach(() => axios.mockClear());

test('renders correctly and without crashing', async () => {
  const { container } = render(<WeatherContainer city={city} />);
  await waitForElement(() => screen.getByRole('heading'));

  expect(container).toMatchSnapshot();
});

test('calls weather API and shows five day forecast weather', async () => {
  const { container } = render(<WeatherContainer city={city} />);
  await waitForElement(() => screen.getByText('Fetching weather data'));

  expect(axios).toHaveBeenCalledTimes(1);
  expect(axios).toHaveBeenCalledWith(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${city.value}/`);

  expect(container.querySelectorAll('.weather-container > div').length).toEqual(5);
});

test('renders without crashing when API return empty', async () => {
  axios.mockReset();
  axios.mockResolvedValueOnce({
    data: null
  });

  const { container } = render(<WeatherContainer city={city} />);
  await waitForElement(() => screen.getByText('Fetching weather data'));

  expect(axios).toHaveBeenCalledTimes(1);
  expect(axios).toHaveBeenCalledWith(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${city.value}/`);
  expect(container.querySelectorAll('.weather-container > div').length).toEqual(0);
});
