import "./App.css"
import User from "./components/User"
import Skills from "./components/Skills"
import Profil from "./components/Profil"
import Cursus from "./components/Cursus"
import DarkMode from "./components/DarkMode"
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"

function App() {
  return (
    <div className="App light-mode">
      <div className="grid__container">
        <div className="sidebar">
          <div className="actions">
            <DarkMode />
            <a href="./files/cv-john-doe.pdf" target="_blank">
              <PictureAsPdfIcon />
            </a>
          </div>
          <User />
          <Skills />
        </div>
        <div className="main">
          <Profil />
          <Cursus />
        </div>
      </div>
      {/* react, react router, material ui, react-pdf */}
      {/* Installation, Nettoyage & paramétrage*/}
      {/* Variables CSS */}

      {/* Colonne de gauche * /} 

      {/* Détails personnels - infos */}
      {/* Réseaux sociaux - socials */}

      {/* Compétences - skills */}
      {/* Langues - languages */}
      {/* Qualités - qualities */}
      {/* Centres d'intérêts - interets */}
      {/* Colonne de droite * /} 

      {/* Profil - profil */}
      {/* Expériences professionelles - experiences */}
      {/* Formation  - education */}
      {/* Media queries */}
      {/* Ligth & Dark mode */}
      {/* Export PDF (react-pdf) */}
    </div>
  )
}

export default App
