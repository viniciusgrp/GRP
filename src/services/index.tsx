import axios from "axios";

export const api = axios.create({
  baseURL: "localhost:5000",
  timeout: 60000,
});
