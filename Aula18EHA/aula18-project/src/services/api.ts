import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com/todos",
  headers: {
    "Content-Type": "application/json",
  },
});
