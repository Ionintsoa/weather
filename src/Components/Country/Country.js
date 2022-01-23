import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useGeolocation from "../../hooks/useGeolocation";

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { red } from "@mui/material/colors";

export default function Country() {
  const [country, setCountry] = useState("");
  const geolocation = useGeolocation();
  const dispatch = useDispatch();

  useEffect(() => {
    handleCurrentLocation();
  }, [geolocation]);

  const handleChangeCountry = () => {
    dispatch({
      type: "SET_LOCATION",
      payload: {
        ...geolocation,
        country: country,
        lon: null,
        lat: null,
      },
    });
    dispatch({
      type: "SET_WEATHER",
      payload: null,
    });
  };

  function handleCurrentLocation() {
    setCountry("");
    dispatch({
      type: "SET_LOCATION",
      payload: {
        ...geolocation,
        country: country,
      },
    });
  }

  return (
    <div style={{ color: "white" }}>
      <TextField
        id="country"
        size="small"
        label="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <IconButton
        aria-label="search"
        color="primary"
        alt="Search country"
        id="change-country"
        onClick={() => handleChangeCountry()}
      >
        <SearchIcon />
      </IconButton>
      <IconButton
        aria-label="location"
        style={{ color: `${red[300]}` }}
        id="current-location"
        onClick={() => handleCurrentLocation()}
      >
        <LocationOnIcon />
      </IconButton>
    </div>
  );
}
