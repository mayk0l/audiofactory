import Logo from "./assets/logo.svg";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MaykolCard from "./components/MaykolCard";
import GrenkCard from "./components/GrenkCard";
import BakuraCard from "./components/BakuraCard";
import CinderCard from "./components/CinderCard";

function App() {
  return (
    <>
      <div>
        <img src={Logo} className="logo" alt="logo" />
        <Header />
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
