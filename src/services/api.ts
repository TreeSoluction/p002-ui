import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.feirasdepernambuco.com.br",
  headers: {
    "Content-Type": "application/json",
  },
});
