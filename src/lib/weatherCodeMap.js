import day_clear from "../assets/256/day_clear.png";
import night_half_moon_clear from "../assets/256/night_half_moon_clear.png";
import night_half_moon_partial_cloud from "../assets/256/night_half_moon_partial_cloud.png";
import day_partial_cloud from "../assets/256/day_partial_cloud.png";
import fog from "../assets/256/fog.png";
import night_half_moon_rain from "../assets/256/night_half_moon_rain.png";
import day_rain from "../assets/256/day_rain.png";
import angry_clouds from "../assets/256/angry_clouds.png";
import cloudy from "../assets/256/cloudy.png";
import mist from "../assets/256/mist.png";
import rain from "../assets/256/rain.png";
import night_half_moon_sleet from "../assets/256/night_half_moon_sleet.png";
import day_sleet from "../assets/256/day_sleet.png";
import sleet from "../assets/256/sleet.png";
import day_rain_thunder from "../assets/256/day_rain_thunder.png";
import night_half_moon_rain_thunder from "../assets/256/night_half_moon_rain_thunder.png";
import night_half_moon_snow from "../assets/256/night_half_moon_snow.png";
import day_snow from "../assets/256/day_snow.png";
import snow from "../assets/256/snow.png";
import snow_thunder from "../assets/256/snow_thunder.png";
import rain_thunder from "../assets/256/rain_thunder.png";
import thunder from "../assets/256/thunder.png";
import wind from "../assets/256/wind.png";

const now = new Date().getHours();
// console.log(now);

export const weatherCodeMap = {
  0: now >= 19 ? night_half_moon_clear : day_clear,
  1: now >= 19 ? night_half_moon_partial_cloud : day_partial_cloud,
  2: cloudy,
  3: angry_clouds,
  45: mist,
  48: fog,
  51: now >= 19 ? night_half_moon_rain : day_rain,
  53: now >= 19 ? night_half_moon_rain : day_rain,
  55: rain,
  56: now >= 19 ? night_half_moon_sleet : day_sleet,
  57: sleet,
  61: rain,
  63: rain,
  65: now >= 19 ? night_half_moon_rain_thunder : day_rain_thunder,
  66: sleet,
  67: sleet,
  71: now >= 19 ? night_half_moon_snow : day_snow,
  73: now >= 19 ? night_half_moon_snow : day_snow,
  75: snow_thunder,
  77: snow,
  80: now >= 19 ? night_half_moon_rain : day_rain,
  81: rain,
  82: rain_thunder,
  85: snow,
  86: snow_thunder,
  95: thunder,
  96: now >= 19 ? night_half_moon_rain_thunder : day_rain_thunder,
  98: wind,
};
