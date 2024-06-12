import { useEffect } from "react";

interface UseResize {
  (callback: () => void, deps?: any[]): void;
}

export const useResize: UseResize = (callback, deps = []) => {
  useEffect(() => {
    window.addEventListener("resize", callback);
    return () => window.removeEventListener("resize", callback);
  }, [callback, ...deps]);
};
