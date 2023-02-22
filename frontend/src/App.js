import "./App.css";
import BusDisplay from "./pages/BusDisplay/BusDisplay";
import { Home } from "./pages/home/Home";
import Info from "./pages/info-page/Info";
import Payment from "./pages/payment-page/Payment";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/bus-display/:routeId" element={<BusDisplay />} />
        <Route path="/info/:date" element={<Info />} />
        <Route path="/info/payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
