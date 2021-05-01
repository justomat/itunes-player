import * as React from "react";
import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SearchHeader } from "./SearchHeader";
import { SearchResult } from "./src/SearchResult";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchResult query={searchQuery} />
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
    paddingTop: 30,
  },
});
