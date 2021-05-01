import * as React from "react";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SongList } from "./SongList";
import { useSongsByArtist } from "./utils/useSongsByArtist";

function AudioPlayer({ audio }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        height: 60,
      }}
    >
      <TouchableOpacity>
        <Text style={{ fontSize: 32 }}>{isPlaying ? "▶️" : "⏸"}</Text>
      </TouchableOpacity>
    </View>
  );
}

export function SearchResult({ query }: { query: string }) {
  const { data: songs, error, isLoading } = useSongsByArtist(query);

  const [selected, setSelected] = useState<Track>();

  useEffect(() => {
    selected;
  }, [selected]);

  return (
    <>
      <SongList
        songs={songs}
        isLoading={isLoading}
        selected={selected}
        setSelected={setSelected}
      />
      {!!selected && <AudioPlayer key={query} audio="50" />}
    </>
  );
}
