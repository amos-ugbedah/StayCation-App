import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Confirm from "./pages/Confirm";
import BackYard from "./pages/BackYard";
import ApartmentWithKitchen from "./pages/ApartmentWithKitchen";
import HotelWithLivingRoom from "./pages/HotelWithLivingRoom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/backyard" element={<BackYard />} />
          <Route path="/apartment-with-kitchen" element={<ApartmentWithKitchen />} />
          <Route path="/hotel-with-living-room" element={<HotelWithLivingRoom />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
