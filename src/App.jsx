import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SquareCard from "./components/SquareCard";

import HeroCard from "./components/HeroCard";
import SmallCard from "./components/SmallCard";

import imgChill from "./assets/images/1a.png";
import imgMusicaUno from "./assets/images/1b.png";
import imgClub from "./assets/images/1c.png";

import img2a from "./assets/images/2a.png";
import img2b from "./assets/images/2b.png";
import img2c from "./assets/images/2c.png";

import img2d from "./assets/images/2d.png";
import img2e from "./assets/images/2e.png";
import img2f from "./assets/images/2f.png";

function App() {
  return (
    <div className="app-container">
      <header className="mobile-header bg-dark text-light p-2 d-flex align-items-center">
        <button className="btn text-light me-2">☰</button>
        <img src="/src/assets/logos/music.svg" alt="Music Logo" height="24" />
      </header>

      <main className="container mt-3">
        <h2 className="text-light mb-3">Novità</h2>

        <HeroCard image={imgChill} alt="Chill Radio" />
        <HeroCard image={imgMusicaUno} alt="Musica Uno Radio" />
        <HeroCard image={imgClub} alt="Club Radio" />

        <h3 className="mt-4 mb-3 text-light">Nuovi episodi radio</h3>

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
          <SmallCard image={img2a} title="Karri" subtitle="& Travis Mills" />
          <SmallCard
            image={img2b}
            title="Stephan Moccio"
            subtitle="& Zane Lowe"
          />
          <SmallCard image={img2c} title="Julia Michaels" subtitle="Guest" />
        </div>
      </main>
    </div>
  );
}

export default App;
