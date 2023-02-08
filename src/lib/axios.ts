import axios from "axios";

export const api = axios.create({
  baseURL: "http:///172.21.42.134:3333",
});
