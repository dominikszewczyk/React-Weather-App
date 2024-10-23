import { useEffect, useState } from "react";

import { defaultLocation } from "../utils/constants";

export default function useGeolocation() {
  const [location, setLocation] = useState({latitude: null, longitude: null});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setError("User denied the request for Geolocation.");
              setLocation(defaultLocation);
              break;
              case error.POSITION_UNAVAILABLE:
                setError("Location information is unavailable.");
                setLocation(defaultLocation);
                break;
                case error.TIMEOUT:
                  setError("The request to get user location timed out.");
                  setLocation(defaultLocation);
                  break;
            default:
              setError("An unknown error occurred.");
              setLocation(defaultLocation);
              break;
          }
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
        setLocation(defaultLocation);
    }
  }, []);

  return [location, error];
}