import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    //apply authoriaztion token to every request if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    //Remove auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;
