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
  },
  {
    url: "https://api-audiorepro.onrender.com/audio-files/set-raw-limited-edition.mp3",
    title: "Set Raw Limited Edition - Cinder",
    tags: ["Raw/Deep/Hypnotic"],
  },
  {
    url: "https://api-audiorepro.onrender.com/audio-files/bounce.mp3",
    title: "Bounce - Cinder",
    tags: ["Raw/Deep/Hypnotic"],
  },
  {
    url: "https://api-audiorepro.onrender.com/audio-files/las-musas-no-tienen-k-caerte-bien.mp3",
    title: "LAS MUSAS NO TIENEN K CARTE BN - Bakura",
    tags: ["Raw/Deep/Hypnotic", "Trance"],
  },
  {
    url: "https://api-audiorepro.onrender.com/audio-files/el-tiempo-nos-dara-la-razon.mp3",
    title: "El tiempo nos dará la razón ٩(◕‿◕｡)۶ - Bakura",
    tags: ["Raw/Deep/Hypnotic", "Trance"],
  },
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