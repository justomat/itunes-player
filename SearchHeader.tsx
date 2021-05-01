import * as React from "react";
import { StyleSheet, TextInput } from "react-native";

export function SearchHeader({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (s: string) => void;
}) {
  return (
    <TextInput
      style={styles.searchInput}
      value={searchQuery}
      onChangeText={setSearchQuery}
      placeholder="Search Artist"
    />
  );
}

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: "#fff",
    borderWidth: 1,
    height: 40,
    margin: 10,
    paddingHorizontal: 10,
    textAlign: "center",
  },
});
