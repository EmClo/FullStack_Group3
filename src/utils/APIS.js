import axios from "axios";

export const API = {
  get: async () => {
    const response = await axios.get("https://data.police.uk/api/forces");
    console.log(response);
  },
};
