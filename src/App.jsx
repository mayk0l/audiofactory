import Logo from "./assets/logo.svg";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MaykolCard from "./components/MaykolCard";
import GrenkCard from "./components/GrenkCard";
import BakuraCard from "./components/BakuraCard";
import CinderCard from "./components/CinderCard";
import React from "react";
import { Helmet } from "react-helmet";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Helmet>
      <div>
        <Header />
        <VideoPlayer />
        <AudioPlayer />
        <MaykolCard />
        <GrenkCard />
        <BakuraCard />
        <CinderCard />
        <Footer />
      </div>
    </>
  );
}

export default App;
