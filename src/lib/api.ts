import { store } from "@/store";
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5050/api",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const accessToken = store.getState().auth.accessToken;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});