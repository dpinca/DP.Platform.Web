"use client";

import { Provider } from "react-redux";
import { store } from "./index";
import AuthInitializer from "@/components/auth/AuthInitializer";
import AuthGuard from "@/components/auth/AuthGuard";

type StoreProviderProps = {
  children: React.ReactNode;
};

export default function StoreProvider({ children }: StoreProviderProps) {
  return (
    <Provider store={store}>
      <AuthInitializer />
      <AuthGuard>{children}</AuthGuard>
    </Provider>
  );
}
