"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshAccessToken  } from "@/lib/api";
import { setAuth, setInitialized } from "@/store/authSlice";
import { AppDispatch } from "@/store";

export default function AuthInitializer() {
  const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
    async function restoreSession() {
      try {
        await refreshAccessToken();
      } catch {
        dispatch(setInitialized());
      }
    }

    restoreSession();
  }, [dispatch]);

  return null;
}