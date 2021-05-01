import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, ms: number) {
  const [debounced, update] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => update(value), ms);

    return () => clearTimeout(id);
  }, [value, ms]);

  return debounced;
}
