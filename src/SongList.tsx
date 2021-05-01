import * as React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { Song } from "./Song";

const Separator = () => (
  <View style={{ borderWidth: StyleSheet.hairlineWidth }} />
);

export function SongList({
  songs,
  isLoading,
  selected,
  setSelected,
}: {
  songs: Track[];
  isLoading: boolean;
  selected?: Track;
  setSelected: (s: Track) => void;
}) {
  return (
    <FlatList
      data={songs}
      keyExtractor={(item) => String(item.trackId)}
      renderItem={({ item }) => (
        <Song
          image={item.artworkUrl60}
          title={item.trackName}
          artist={item.artistName}
          album={item.collectionName}
          active={!!selected && item.trackId === selected.trackId}
          onPress={() => setSelected(item)}
        />
      )}
      ItemSeparatorComponent={Separator}
      refreshing={isLoading}
      onRefresh={() => {}}
      extraData={selected}
    />
  );
}
