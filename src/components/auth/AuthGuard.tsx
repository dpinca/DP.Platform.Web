"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import { RootState } from "@/store";

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const { accessToken, isInitialized } = useSelector(
    (state: RootState) => state.auth
  );

  const isLoginPage = pathname === "/login";

  useEffect(() => {
    if (!isInitialized) {
      return;
    }

    if (!accessToken && !isLoginPage) {
      router.replace("/login");
      return;
    }

    if (accessToken && isLoginPage) {
      router.replace("/tickets");
    }
  }, [
    isInitialized,
    accessToken,
    isLoginPage,
    router,
  ]);

  if (!isInitialized) {
    return <div>Checking...</div>;
  }

  return children;
}