const apiZipCode = async (
  city: string,
  setWeatherInfo: React.Dispatch<any>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const cityFormat = city.replace(" ", "+");

  try {
    setLoading(true);
    const timestamp = new Date().getTime(); 
    const response = await fetch(
      `${process.env.URL_ZIP_CODE}q=${cityFormat}&appid=${process.env.API_KEY}&timestamp=${timestamp}`
    );
    const result = await response.json();
    setWeatherInfo(result[0]);
  } catch (error) {
    throw error;
  } finally {
    setLoading(false);
  }
};

export default apiZipCode;