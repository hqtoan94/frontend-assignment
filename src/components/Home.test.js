import React from 'react';
import { render, fireEvent, waitForElement, waitForElementToBeRemoved } from '@testing-library/react';
import axios from 'axios';

import Home from './Home';
import WeatherContainer from './WeatherContainer';
import { searchCityAPIResponse } from './__mocks__/apiResponse';

jest.mock('axios');
jest.mock('./WeatherContainer', () => {
  return jest.fn(() => null);
});

beforeEach(() => {
  jest.useFakeTimers();
  axios.mockResolvedValueOnce(searchCityAPIResponse);
});

afterEach(() => axios.mockClear());

test('renders correctly and without crashing', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});

test('calls search API when input search text and able to select city', async () => {
  const { container, getByText } = render(<Home />);
  const searchString = 'San';
  const mockFirstCity = searchCityAPIResponse.data[0];

  fireEvent.change(container.querySelector('.select-box input'), {
    target: {
      value: searchString
    }
  });

  // Wait for debounce
  jest.runAllTimers();

  expect(axios).toHaveBeenCalledTimes(1);
  expect(axios).toHaveBeenCalledWith(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${searchString}`);

  await waitForElementToBeRemoved(() => getByText('Loading...'));
  const firstCity = getByText(mockFirstCity.title);

  fireEvent.click(firstCity);
  await waitForElement(() => firstCity);

  expect(WeatherContainer).toHaveBeenCalledTimes(1);
});

test('calls search API and only make 1 search request when user is typing fast', () => {
  const { container } = render(<Home />);
  const searchString = 'San';
  let searchInputElement = container.querySelector('.select-box input');

  // Simulate user's typing fast
  fireEvent.change(searchInputElement, {
    target: {
      value: 'S'
    }
  });
  fireEvent.change(searchInputElement, {
    target: {
      value: 'Sa'
    }
  });
  fireEvent.change(searchInputElement, {
    target: {
      value: searchString
    }
  });

  // Wait for debounce
  jest.runAllTimers();

  expect(axios).toHaveBeenCalledTimes(1);
  expect(axios).toHaveBeenCalledWith(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${searchString}`);
});
