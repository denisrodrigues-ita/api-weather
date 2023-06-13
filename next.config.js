/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    URL_ZIP_CODE: "http://api.openweathermap.org/geo/1.0/direct?",
    URL_WEATHER: "https://api.openweathermap.org/data/2.5/weather?",
    API_KEY: "e96b230e3ae83bc2a6af22c852f2fcea",
  },
};

module.exports = nextConfig;
