import { useState, useEffect } from "react";

export default function useGeolocation() {
  const [geolocation, setGeolocation] = useState();

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(function (position) {
      setGeolocation({
        lon: position.coords.longitude,
        lat: position.coords.latitude,
      });
    });
  }, []);

  return geolocation;
}
