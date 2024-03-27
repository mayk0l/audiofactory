import Logo from "./assets/logo.svg";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <img src={Logo} className="logo" alt="logo" />
        <Header />
        <AudioPlayer />
        <Footer />
      </div>
    </>
  );
}

export default App;
