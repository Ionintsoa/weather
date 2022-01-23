import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../redux/reducers/weatherReducer";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const styles = {
  weatherCard: {
    backgroundColor: "transparent",
  },
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Weather() {
  const dispatch = useDispatch();

  const { location, weather } = useSelector((state) => ({
    ...state.locationReducer,
    ...state.weatherReducer,
  }));

  useEffect(() => {
    if (location.country !== null || location.lon !== null)
      dispatch(getWeather(location));
  }, [location, dispatch]);

  return (
    <Card sx={{ minWidth: 275 }} style={styles.weatherCard}>
      {weather ? (
        <>
          {weather.main ? (
            <>
              <CardContent>
                <Box display="flex" flexDirection="row">
                  <Box p={1}>
                    <Typography
                      variant="h2"
                      id="country-name"
                      color="textPrimary"
                    >
                      {weather.name},{weather.sys?.country}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {weather.coord?.lon}, {weather.coord?.lat}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardContent>
                <Box display="flex" flexDirection="row-reverse">
                  <Box p={0}>
                    <Typography variant="h4" color="textPrimary">
                      Temp: {weather.main?.temp}
                      <span>&#176;</span>
                      {"C"}
                    </Typography>
                    <Typography variant="h5" color="textSecondary">
                      {weather.weather
                        ? capitalizeFirstLetter(weather.weather[0]?.description)
                        : ""}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      H: {weather.main?.temp_max}
                      <span>&#176;</span>
                      {"C"} - L: {weather.main?.temp_min}
                      <span>&#176;</span>
                      {"C"}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardContent>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-around"
                  textAlign="center"
                >
                  <Box p={1}>
                    <Typography variant="h6" color="textPrimary">
                      Humidity <br /> {weather.main?.humidity} %
                    </Typography>
                  </Box>
                  <Box p={1}>
                    <Typography variant="h6" color="textPrimary">
                      Pressure <br /> {weather.main?.pressure} pa
                    </Typography>
                  </Box>
                  <Box p={1}>
                    <Typography variant="h6" color="textPrimary">
                      Wind <br /> {weather.wind?.speed} km/h
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </>
          ) : (
            <Box p={1}>
              <Typography variant="h2" id="country-name" color="textPrimary">
                {weather.message}
              </Typography>
            </Box>
          )}
        </>
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
    </Card>
  );
}
