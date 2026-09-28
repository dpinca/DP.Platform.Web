"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api } from "@/lib/api";
import { setAuth, setInitialized } from "@/store/authSlice";
import { AppDispatch } from "@/store";
import { LoginResponse } from "@/types/auth";

export default function AuthInitializer() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    async function restoreSession() {
      try {

        const response = await api.post<LoginResponse>(
          "/auth/refresh"
        );

        dispatch(
          setAuth({
            accessToken: response.data.accessToken,
            expiresAtUtc: response.data.expiresAtUtc,
          })
        );
      } catch {
        dispatch(setInitialized());
      }
    }

    restoreSession();
  }, [dispatch]);

  return null;
}