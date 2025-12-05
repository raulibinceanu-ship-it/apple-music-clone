import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SquareCard from "./components/SquareCard";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";

import HeroCard from "./components/HeroCard";
import SmallCard from "./components/SmallCard";

import imgChill from "./assets/images/1a.png";
import imgMusicaUno from "./assets/images/1b.png";
import imgClub from "./assets/images/1c.png";

/*import img2a from "./assets/images/2a.png";
import img2b from "./assets/images/2b.png";
import img2c from "./assets/images/2c.png";
*/

import img2d from "./assets/images/2d.png";
import img2e from "./assets/images/2e.png";
import img2f from "./assets/images/2f.png";

function App() {
  const [songs, setSongs] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
      .then((res) => res.json())
      .then((data) => {
        setSongs(data.data);
        setLoading(false);
      })
      .catch((err) => console.error("Errore API Deezer:", err));
  }, []);
  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=podcast")
      .then((res) => res.json())
      .then((data) => setEpisodes(data.data))
      .catch((err) => console.error("Errore podcast:", err));
  }, []);

  return (
    <div className="app-container d-md-flex">
      <Sidebar className="d-none d-md-block" />

      <header className="mobile-header bg-dark text-light p-2 d-flex align-items-center">
        <button
          className="btn text-light me-2 fs-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <img src="/src/assets/logos/music.svg" alt="Music Logo" height="24" />
      </header>
      {menuOpen && (
        <div className="mobile-menu bg-dark text-light p-3 d-md-none">
          <p>Home</p>
          <p>Novità</p>
          <p>Radio</p>
        </div>
      )}

      <main className="container mt-3">
        <h2 className="text-light mb-3">Novità</h2>

        <HeroCard image={imgChill} alt="Chill Radio" />
        <HeroCard image={imgMusicaUno} alt="Musica Uno Radio" />
        <HeroCard image={imgClub} alt="Club Radio" />

        <h3 className="mt-4 mb-3 text-light">Nuovi episodi radio</h3>
        <div className="d-flex gap-3 overflow-auto pb-3">
          {episodes.slice(0, 6).map((ep) => (
            <SmallCard
              key={ep.id}
              image={ep.album?.cover_medium}
              title={ep.artist?.name}
              subtitle={ep.title}
            />
          ))}
        </div>

        <h3 className="mt-4 mb-3 text-light">Nuove uscite</h3>

        <div className="d-flex gap-3 overflow-auto pb-3">
          <SquareCard
            image={img2d}
            title="Rauw Alejandro"
            subtitle="Cosa Nuestra"
          />
          <SquareCard
            image={img2e}
            title="Feel More Radio"
            subtitle="Stephan Moccio"
          />
          <SquareCard
            image={img2f}
            title="Michael Bublé"
            subtitle="& Carly Pearce"
          />
        </div>

        <div className="d-flex gap-3 overflow-auto pb-3">
          {loading ? (
            <p className="text-light">Caricamento...</p>
          ) : (
            songs.map((song) => (
              <SmallCard
                key={song.id}
                image={song.album?.cover_medium}
                title={song.artist?.name}
                subtitle={song.title}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
