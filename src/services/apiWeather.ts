const apiWeather = async (
  lat: number,
  lon: number,
  setData: React.Dispatch<any>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setLoading(true);
    const timestamp = new Date().getTime(); 
    const response = await fetch(
      `${process.env.URL_WEATHER}lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric&lang=pt_br&timestamp=${timestamp}`
    );
    const result = await response.json();
    setData(result);
  } catch (error) {
    throw error;
  } finally {
    setLoading(false);
  }
};


export default apiWeather;
