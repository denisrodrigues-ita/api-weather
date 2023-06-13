const apiWeather = async (
  lat: number,
  lon: number,
  setData: React.Dispatch<any>
) => {
  try {
    const response = await fetch(
      `${process.env.URL_WEATHER}lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric&lang=pt_br`
    );
    const result = await response.json();
    setData(result);
  } catch (error) {
    console.log(error);
  }
};

export default apiWeather;
