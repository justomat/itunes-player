import * as React from "react";
import { useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { SongList } from "./SongList";
import { useAudio } from "./utils/useAudio";
import { useSongsByArtist } from "./utils/useSongsByArtist";

const Loading = () => <ActivityIndicator color="tomato" size="large" />;
const Button = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={{ fontSize: 32 }}>{text}</Text>
  </TouchableOpacity>
);

function AudioPlayer({ uri }: { uri: string }) {
  const { status, play, pause, replay } = useAudio(uri);

  const isFinished =
    (status?.playableDurationMillis || 0) - (status?.positionMillis || 0) < 200;

  if (!uri) return null;
  return (
    <View
      style={{
        borderTopWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffa494",
        height: 60,
      }}
    >
      {!status?.isLoaded ? (
        <Loading />
      ) : status.isPlaying ? (
        <Button text="⏸" onPress={pause} />
      ) : (
        <Button text="▶️" onPress={isFinished ? replay : play} />
      )}
    </View>
  );
}

export function SearchResult({ query }: { query: string }) {
  const { data: songs, error, isLoading } = useSongsByArtist(query);

  const [selected, setSelected] = useState<Track>();

  return (
    <>
      <SongList
        songs={songs}
        isLoading={isLoading}
        selected={selected}
        setSelected={setSelected}
      />
      <AudioPlayer uri={selected?.previewUrl || ""} />
    </>
  );
}
