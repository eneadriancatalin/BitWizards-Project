import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Sidebar from "./components/global/Sidebar";
import Sidebar2 from "./components/global/Sidebar2";
import Home from "./pages/Home";
import Tests from "./pages/Tests/Tests";
import Manager from "./pages/Tests/Manager";
import Navbar from "./components/global/Navbar";
function App() {
  return (
    <div className="App flex h-screen w-screen font-arimo bg-white">
      <Router>
        {/* //! SIDEBARUL PAGINII */}
        <Sidebar2 />
        <div className="flex flex-col  w-full">
          {/* //! BARA DE NAVIGATII */}
          {/* <Navbar /> */}
          {/* //! ROUTURILE PAGINILOR */}
          <Routes>
            <Route key="home" exact path="/" element={<Home />} />
            <Route key="tests" exact path="/manager" element={<Tests />} />
            <Route
              key="testsa"
              exact
              path="/manager/:id/:name?"
              element={<Manager />}
            />
            <Route key="undefined" path="*" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
