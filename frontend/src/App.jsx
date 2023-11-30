import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Sidebar from "./components/global/Sidebar";
import Sidebar2 from "./components/global/Sidebar2";
import Home from "./pages/Home";
import Tests from "./pages/Tests/Tests";
import Manager from "./pages/Tests/Manager";
import Navbar from "./components/global/Navbar";
import Studenti from "./pages/Studenti";
import Creaza from "./pages/Creaza";
import Sabloane from "./pages/Sabloane";
import Analiza from "./pages/Analiza";
import Performante from "./pages/Performante";
import Scoruri from "./pages/Scoruri";
import Rapoarte from "./pages/Rapoarte";
import Istoric from "./pages/Istoric";
import Clase from "./pages/Clase";
import Individuale from "./pages/Individuale";
function App() {
  return (
    <div className="App flex h-screen w-screen font-questial bg-white">
      <Router>
        {/* //! SIDEBARUL PAGINII */}
        <Sidebar2 />
        <div className="flex flex-col  w-full">
          {/* //! BARA DE NAVIGATII */}
          {/* <Navbar /> */}
          {/* //! ROUTURILE PAGINILOR */}
          <Routes>
            <Route key="home" exact path="/" element={<Home />} />
            <Route
              key="studenti"
              exact
              path="/studenti"
              element={<Studenti />}
            />
            <Route key="creaza" exact path="/creaza" element={<Creaza />} />
            <Route
              key="sabloane"
              exact
              path="/sabloane"
              element={<Sabloane />}
            />
            <Route key="tests" exact path="/manager" element={<Tests />} />
            <Route
              key="testsa"
              exact
              path="/manager/:id/:name?"
              element={<Manager />}
            />
            <Route key="analiza" exact path="/analiza" element={<Analiza />} />
            <Route
              key="performanete"
              exact
              path="/performante"
              element={<Performante />}
            />
            <Route key="scoruri" exact path="/scroruri" element={<Scoruri />} />
            <Route key="istoric" exact path="/istoric" element={<Istoric />} />
            <Route
              key="rapoarte"
              exact
              path="/rapoarte"
              element={<Rapoarte />}
            />
            <Route key="clase" exact path="/clase" element={<Clase />} />
            <Route
              key="individuale"
              exact
              path="/individuale"
              element={<Individuale />}
            />
            <Route key="undefined" path="*" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
