# Supported Devices
Android 5+

# Features
- After tapping a song, a media player would show up from the bottom and start playing the preview for that song.
- The media player can only play and pause.
- The media player is hidden until a song is clicked, and will stay on screen until a different artist is searched.
- When a song is being played, the song is highlighted in a lighter color.
- Performing a new search will not stop playback

# Build Requirements
git 2+
node 12.8.4
yarn 1.22.10
[watchman](https://facebook.github.io/watchman/docs/install#buildinstall) (if on macos)
Android Studio 3.0+

# Running on Emulator/Device
https://docs.expo.io/workflow/android-studio-emulator/

```
cd itunes-player
yarn
yarn android
```

# Deploy
```
cd itunes-player
yarn
yarn build
```