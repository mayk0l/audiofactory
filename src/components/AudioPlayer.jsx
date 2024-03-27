import React from 'react'
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

const tracks = [
  {
    url: "https://api-audiorepro.onrender.com/audio-files/si-no-duermes-sale-mejor.mp3",
    title: "Si no duermes sale mejor - 999maykol",
    tags: ["Raw/Deep/Hypnotic"],
  },
  {
    url: "https://api-audiorepro.onrender.com/audio-files/de-la-hardgroove-hipnotica-b2b-cinder.mp3",
    title: "De la HardGroove Hipnotica - Cinder b2b 999maykol",
    tags: ["Raw/Deep/Hypnotic"],
  },
  {
    url: "https://api-audiorepro.onrender.com/audio-files/dj-set-techno-or-die-grenk.mp3",
    title: "DJ SET TECHNO OR DIE 09/12/2023 - Grenk",
    tags: ["Raw/Deep/Hypnotic"],
  }
];

const colors = {
  tagsBackground: "#3e32e4",
  tagsText: "#ffffff",
  tagsBackgroundHoverActive: "#171926",
  tagsTextHoverActive: "#ffffff",
  searchBackground: "#292d48",
  searchText: "#ffffff",
  searchPlaceHolder: "#575a77",
  playerBackground: "#292d48",
  titleColor: "#ffffff",
  timeColor: "#ffffff",
  progressSlider: "#3e32e4",
  progressUsed: "#ffffff",
  progressLeft: "#151616",
  bufferLoaded: "#1f212b",
  volumeSlider: "#3e32e4",
  volumeUsed: "#ffffff",
  volumeLeft: "#151616",
  playlistBackground: "#292d48",
  playlistText: "#575a77",
  playlistBackgroundHoverActive: "#292d48",
  playlistTextHoverActive: "#ffffff",
};

const AudioPlayer = () => {
  return (
    <div className='audioPlayer'>
      <Player 
        trackList={tracks}
        includeTags={true}
        includeSearch={true}
        showPlaylist={true}
        sortTracks={true}
        autoPlayNextTrack={true}
        customColorScheme={colors}
      />
    </div>
  )
}

export default AudioPlayer