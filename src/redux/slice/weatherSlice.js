import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { client } from "../../lib/axios";

export const getWeather = createAsyncThunk("getWeather", async (weather) => {
  //console.log(weather.longitude, weather.latitude, weather.select);

  try {
    const response = await client.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${weather.latitude}&longitude=${weather.longitude}&${weather.select}=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m`,
    );
    return response?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

const weatherSlice = createSlice({
  name: "map",
  initialState: {
    hourlyWeather: {},
    hourlyWeatherList: [],
    currentWeather: {},
    status: "loading",
    error: "",
    currentWeatherList: [],
  },
  reducers: {
    upWeather: (state, action) => {
      //console.log(action.payload);
      if (action.payload.select === "current") {
        state.currentWeather = action.payload;
      }
      if (action.payload.select === "hourly") {
        state.hourlyWeather = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        // console.log(action.payload);
        // console.log(action?.payload?.current, action?.payload?.current_units);
        if (action?.payload?.current != null) {
          state.currentWeatherList.push({
            current: action?.payload?.current,
            units: action?.payload?.current_units,
          });
        }
        if (action?.payload?.hourly != null) {
          state.hourlyWeatherList.push({
            hourly: action?.payload?.hourly,
            units: action?.payload?.hourly_units,
          });
        }

        state.status = "ok";
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.status = "error";
        state.error = action?.payload?.error?.message;
      });
  },
});

export const { upWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
