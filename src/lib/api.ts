
import { store } from "@/store";
import { setAuth, clearAuth } from "@/store/authSlice";
import type { LoginResponse } from "@/types/auth";
import axios from "axios";

declare module "axios" {
  export interface InternalAxiosRequestConfig {
    _retry?: boolean;
  }
}

export const api = axios.create({
  baseURL: "http://localhost:5050/api",
  withCredentials: true,
});

// Used specifically for refreshing the access token.
// It shares the base URL and sends cookies, but has no auth interceptors.
const refreshApi = axios.create({
  baseURL: "http://localhost:5050/api",
  withCredentials: true,
});

let refreshPromise: Promise<LoginResponse> | null = null;

export function refreshAccessToken(): Promise<LoginResponse> {
  if (!refreshPromise) {
    refreshPromise = refreshApi
      .post<LoginResponse>("/auth/refresh")
      .then((response) => {
        const { accessToken, expiresAtUtc } = response.data;

        store.dispatch(
          setAuth({
            accessToken,
            expiresAtUtc,
          })
        );

        return response.data;
      })
      .finally(() => {
        refreshPromise = null;
      });
  }

  return refreshPromise;
}


api.interceptors.request.use((config) => {
  const accessToken = store.getState().auth.accessToken;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});


api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (!axios.isAxiosError(error)) {
      return Promise.reject(error);
    }

    const originalRequest = error.config;

    const isAuthEndpoint = [
      "/auth/login",
      "/auth/refresh",
      "/auth/logout",
    ].some((endpoint) => originalRequest?.url?.includes(endpoint));

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry &&
      !isAuthEndpoint
    ) {
      originalRequest._retry = true;

      try {
        const { accessToken } = await refreshAccessToken();

        originalRequest.headers.set(
          "Authorization",
          `Bearer ${accessToken}`
        );

        return api(originalRequest);
      } catch (refreshError) {
        store.dispatch(clearAuth());

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);


