import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Barrels from "./pages/Barrels";
import BarrelsDetail from "./pages/subpages/BarrelsDetail";
import Brothers from "./pages/Brothers";
import Horizontals from "./pages/Horizontals";
import Laser from "./pages/Laser";
import Lathe from "./pages/Lathe";
import ModelShop from "./pages/ModelShop";
import MoriTsugami from "./pages/MoriTsugami";
import UppersLowers from "./pages/UppersLowers";
import Verticals from "./pages/Verticals";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact="true" element={<Dashboard />} />
          <Route path="/Barrels" element={<Barrels />} />
          <Route path="/Brothers" element={<Brothers />} />
          <Route path="/Horizontals" element={<Horizontals />} />
          <Route path="/Laser" element={<Laser />} />
          <Route path="/Lathe" element={<Lathe />} />
          <Route path="/ModelShop" element={<ModelShop />} />
          <Route path="/MoriTsugami" element={<MoriTsugami />} />
          <Route path="/UppersLowers" element={<UppersLowers />} />
          <Route path="/Verticals" element={<Verticals />} />
          {/* End of Navbar, start of detail pages */}
          <Route path="/Barrels/Details" element={<BarrelsDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
