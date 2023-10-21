// Import libs
import axios from "axios";

// Import configs
import config from "../config";

// Here we create an API instance.
const API = axios.create({
  baseURL: "https://api.api-ninjas.com/v1", // Enter the base URL
  // Here you can set your configs. Like headers and stuff
  headers: {
    "X-Api-Key": config.REACT_APP_API_KEY, // Use your headers
  },
});

// Now export it!
export default API;
