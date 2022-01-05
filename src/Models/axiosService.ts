import axios from "axios";

export const axiosService = axios.create({
  baseURL: "https://fakerestapi.azurewebsites.net/api/v1/"
});
