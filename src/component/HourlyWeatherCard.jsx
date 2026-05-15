const HourlyWeatherCard = ({ weather }) => {
  const { hourly, units } = weather[0];
  console.log(hourly, units); //Hourly
  return <div>Hourly</div>;
};

export default HourlyWeatherCard;
