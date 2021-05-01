import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export function useSongsByArtist(artist: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<Track[]>([]);

  const debouncedQuery = useDebounce(artist, 300);
  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    fetch(
      "https://itunes.apple.com/search?entity=song&attribute=allArtistTerm&term=" +
        artist.replace(/ /g, "+"),
      {
        signal: controller.signal,
      }
    )
      .then((x) => x.json())
      .then((x) => setData(x.results))
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [debouncedQuery]);

  return { data, error, isLoading };
}
