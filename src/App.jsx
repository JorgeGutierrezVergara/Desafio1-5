import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";

import HomePage from "./views/HomePage";
import Contacto from "./views/Contacto";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
};

export default App;
