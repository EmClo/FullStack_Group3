import axios from "axios";

export const API = {
  get: async (lat, lng, date) => {
    const response = await axios.get(
      `https://data.police.uk/api/crimes-at-location?date=${date}&lat=${lat}&lng=${lng}`
    );
    console.log(response);
    return response;
  },
};
