import "./App.css";
import Paper from "@mui/material/Paper";
import Country from "./Components/Country/Country";
import Weather from "./Components/Weather/Weather";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function App() {
  const { weather } = useSelector((state) => ({
    ...state.weatherReducer,
  }));

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 700,
        flexGrow: 1,
        backgroundImage: weather?.weather
          ? `url(/Bg/${weather?.weather[0]?.main}.jpeg)`
          : `url(/Bg/Clear.jpeg)`,
        backgroundSize: "cover",
      }}
    >
      <Box p={1}>
        <Typography
          variant="h1"
          color="textPrimary"
          fontSize="2em"
          fontWeight="bold"
        >
          What's the weather today:{" "}
          {new Intl.DateTimeFormat("en-GB", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          }).format(Date.now())}{" "}
        </Typography>
      </Box>
      <Country />
      <Weather />
    </Paper>
  );
}

export default App;
