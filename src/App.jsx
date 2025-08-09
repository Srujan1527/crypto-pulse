import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./components/HomePage";
import BuyCryptoPage from "./components/BuyCryptoPage";
import Markets from "./components/Markets";
import Trade from "./components/TradePage";
import Futures from "./components/Futures";
import Earn from "./components/Earn";
import SignUpPage from "./components/SignUpPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buy-crypto" element={<BuyCryptoPage />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/futures" element={<Futures />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
