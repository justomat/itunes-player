import { useEffect, useRef, useState } from "react";
import { Audio, AVPlaybackStatus } from "expo-av";

export function useAudio(uri: string) {
  const audio = useRef<Audio.Sound>();
  const [status, setStatus] = useState<AVPlaybackStatus>();

  useEffect(() => {
    if (uri) {
      Audio.Sound.createAsync(
        { uri, overrideFileExtensionAndroid: "m4a" },
        { shouldPlay: true },
        (s) => setStatus(s)
      )
        .then(({ sound }) => (audio.current = sound))
        .catch(console.error);
    }

    return () => {
      audio.current?.unloadAsync?.();
    };
  }, [uri]);

  const pause = () => audio.current?.pauseAsync();
  const play = () => audio.current?.playAsync();
  const replay = () => audio.current?.replayAsync();

  return { status, pause, play, replay };
}
