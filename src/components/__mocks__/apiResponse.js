export const searchCityAPIResponse = {
  data: [
    {
      title: "San Francisco",
      location_type: "City",
      woeid: 2487956,
      latt_long: "37.777119, -122.41964"
    },
    {
      title: "San Diego",
      location_type: "City",
      woeid: 2487889,
      latt_long: "32.715691,-117.161720"
    },
    {
      title: "San Jose",
      location_type: "City",
      woeid: 2488042,
      latt_long: "37.338581,-121.885567"
    },
    {
      title: "San Antonio",
      location_type: "City",
      woeid: 2487796,
      latt_long: "29.424580,-98.494614"
    },
    {
      title: "Santa Cruz",
      location_type: "City",
      woeid: 2488853,
      latt_long: "36.974018,-122.030952"
    },
    {
      title: "Santiago",
      location_type: "City",
      woeid: 349859,
      latt_long: "-33.463039,-70.647942"
    },
    {
      title: "Santorini",
      location_type: "City",
      woeid: 56558361,
      latt_long: "36.406651,25.456530"
    },
    {
      title: "Santander",
      location_type: "City",
      woeid: 773964,
      latt_long: "43.461498,-3.810010"
    },
    {
      title: "Busan",
      location_type: "City",
      woeid: 1132447,
      latt_long: "35.170429,128.999481"
    },
    {
      title: "Santa Cruz de Tenerife",
      location_type: "City",
      woeid: 773692,
      latt_long: "28.46163,-16.267059"
    },
    {
      title: "Santa Fe",
      location_type: "City",
      woeid: 2488867,
      latt_long: "35.666431,-105.972572"
    }
  ]
};


export const mockCityWeatherAPIResponse = {
  data: {
    consolidated_weather: [
      {
        id: 4614983327416320,
        weather_state_name: "Heavy Rain",
        weather_state_abbr: "hr",
        wind_direction_compass: "SW",
        created: "2020-05-20T03:56:47.054140Z",
        applicable_date: "2020-05-20",
        min_temp: 27.9,
        max_temp: 33.815,
        the_temp: 31.634999999999998,
        wind_speed: 3.696190913709271,
        wind_direction: 224.56950765874942,
        air_pressure: 1008,
        humidity: 79,
        visibility: 10.061553030303031,
        predictability: 77
      },
      {
        id: 5069141977333760,
        weather_state_name: "Light Rain",
        weather_state_abbr: "lr",
        wind_direction_compass: "SW",
        created: "2020-05-20T03:56:49.730432Z",
        applicable_date: "2020-05-21",
        min_temp: 27.43,
        max_temp: 36.025,
        the_temp: 33.375,
        wind_speed: 4.912741414942071,
        wind_direction: 222.67319893657518,
        air_pressure: 1008,
        humidity: 67,
        visibility: 9.837238029905354,
        predictability: 75
      },
      {
        id: 4811021875150848,
        weather_state_name: "Light Rain",
        weather_state_abbr: "lr",
        wind_direction_compass: "SW",
        created: "2020-05-20T03:56:52.750648Z",
        applicable_date: "2020-05-22",
        min_temp: 27.11,
        max_temp: 35.25,
        the_temp: 33.165,
        wind_speed: 5.438335180314961,
        wind_direction: 216.86254152724499,
        air_pressure: 1008.5,
        humidity: 67,
        visibility: 13.113728326572815,
        predictability: 75
      },
      {
        id: 6614570531553280,
        weather_state_name: "Heavy Rain",
        weather_state_abbr: "hr",
        wind_direction_compass: "SSW",
        created: "2020-05-20T03:56:55.748149Z",
        applicable_date: "2020-05-23",
        min_temp: 27.189999999999998,
        max_temp: 35.42,
        the_temp: 32.795,
        wind_speed: 6.348001575047058,
        wind_direction: 195.17458771009575,
        air_pressure: 1009,
        humidity: 67,
        visibility: 9.950948958084783,
        predictability: 77
      },
      {
        id: 5087776951238656,
        weather_state_name: "Showers",
        weather_state_abbr: "s",
        wind_direction_compass: "S",
        created: "2020-05-20T03:56:58.824178Z",
        applicable_date: "2020-05-24",
        min_temp: 27.08,
        max_temp: 34.225,
        the_temp: 32.620000000000005,
        wind_speed: 5.838168881454969,
        wind_direction: 175.9993901614561,
        air_pressure: 1010.5,
        humidity: 67,
        visibility: 13.32437316074127,
        predictability: 73
      },
      {
        id: 5740883234258944,
        weather_state_name: "Light Rain",
        weather_state_abbr: "lr",
        wind_direction_compass: "S",
        created: "2020-05-20T03:57:01.695177Z",
        applicable_date: "2020-05-25",
        min_temp: 27.025,
        max_temp: 35.025,
        the_temp: 32.69,
        wind_speed: 4.536621331424481,
        wind_direction: 173,
        air_pressure: 1011,
        humidity: 63,
        visibility: 9.999726596675416,
        predictability: 75
      }
    ],
    time: "2020-05-20T13:51:21.297710+07:00",
    sun_rise: "2020-05-20T05:30:15.986073+07:00",
    sun_set: "2020-05-20T18:09:30.713590+07:00",
    timezone_name: "LMT",
    parent: {
      title: "Vietnam",
      location_type: "Country",
      woeid: 23424984,
      latt_long: "15.974210,107.868042"
    },
    sources: [
      {
        title: "BBC",
        slug: "bbc",
        url: "http://www.bbc.co.uk/weather/",
        crawl_rate: 360
      },
      {
        title: "Forecast.io",
        slug: "forecast-io",
        url: "http://forecast.io/",
        crawl_rate: 480
      },
      {
        title: "Met Office",
        slug: "met-office",
        url: "http://www.metoffice.gov.uk/",
        crawl_rate: 180
      },
      {
        title: "OpenWeatherMap",
        slug: "openweathermap",
        url: "http://openweathermap.org/",
        crawl_rate: 360
      },
      {
        title: "World Weather Online",
        slug: "world-weather-online",
        url: "http://www.worldweatheronline.com/",
        crawl_rate: 360
      }
    ],
    title: "Ho Chi Minh City",
    location_type: "City",
    woeid: 1252431,
    latt_long: "10.759180,106.662498",
    timezone: "Asia/Ho_Chi_Minh"
  }
};

