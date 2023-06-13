const apiZipCode = async (
  city: string,
  setWeatherInfo: React.Dispatch<React.SetStateAction<null>>
) => {
  const cityFormat = city.replace(" ", "+");

  try {
    const response = await fetch(
      `${process.env.URL_ZIP_CODE}q=${cityFormat}&appid=${process.env.API_KEY}`
    );
    const result = await response.json();
    setWeatherInfo(result);
  } catch (error) {
    throw error;
  }
};

export default apiZipCode;
