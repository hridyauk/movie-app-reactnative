import axios from "axios";
import { APP_KEY, BASE_URL } from "../config/appConfig";

export const getMovies = async (type, subtype) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/${type}/${subtype}?`,
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${APP_KEY}`,
    },
  };

  try {
    const response = await axios.request(options);
    // console.log("data: ", response.data);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
