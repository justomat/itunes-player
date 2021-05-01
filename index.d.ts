interface Track {
  trackId: number;
  trackName: string;
  artistName: string;
  collectionName: string;
  artworkUrl60: string;
  previewUrl: string;
}

interface ItunesResponse {
  results: Track[];
}
