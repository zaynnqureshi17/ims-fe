"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const usePrefetchNavigate = () => {
  const router = useRouter();

  const prefetchAndNavigate = useCallback(
    (url: string) => {
      try {
        router.prefetch(url);
        router.push(url);
      } catch (error) {
        console.error("Navigation error:", error);
      }
    },
    [router],
  );

  return prefetchAndNavigate;
};
