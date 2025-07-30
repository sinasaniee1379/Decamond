import { AxiosError, AxiosResponse } from "axios";
import { errorMessage } from "./message";

export const handleError = (error: AxiosError) => {
  if (error.response !== undefined) {
    if (error.response.status >= 400 && error.response.status < 500) {
      return {
        error: true,
        errorBody: error.response.data,
        errorType: "wrongData",
      };
    }
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
      return {
        error: true,
        errorType: "response",
        errorBody: error.response,
      };
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      // console.log(error.request);
      return { error: true, errorType: "request", errorBody: error.request };
    } else {
      // Something happened in setting up the request that triggered an Error
      // console.log("Error", error.message);
      return { error: true, errorBody: error.message };
    }
  } else {
    return "error";
  }
};
