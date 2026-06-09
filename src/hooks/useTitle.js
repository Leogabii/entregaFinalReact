import { useEffect } from "react";

export const useTitle = (titulo) => {
  useEffect(() => {
    document.title = titulo;
  }, [titulo]);
};
