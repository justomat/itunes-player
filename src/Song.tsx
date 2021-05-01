import * as React from "react";
import { Text, View, Image, TouchableOpacity,  } from "react-native";

export function Song({
  image,
  title,
  artist,
  album,
  active,
  onPress
}: {
  image: string;
  title: string;
  artist: string;
  album: string;
  active: boolean;
  onPress: any;
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          ...(active ? { backgroundColor: "#ffbf47" } : {}),
        }}
      >
        <Image
          style={{ width: 60, height: 60, marginRight: 12 }}
          source={{ uri: image }}
        />
        <View>
          <Text numberOfLines={1} style={{ fontWeight: "bold" }}>
            {title}
          </Text>
          <Text numberOfLines={1}>{artist}</Text>
          <Text numberOfLines={1}>{album}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
