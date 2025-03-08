import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Confirm from "./pages/Confirm";
import PropertySection from "./components/PropertySection";
import PropertyDetail from "./pages/PropertyDetail"; // Import PropertyDetail page
import ErrorBoundary from "./components/ErrorBoundary"; // Import ErrorBoundary

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/confirm" element={<Confirm />} />

            {/* Property Sections */}
            <Route path="/backyard" element={<PropertySection category="backyard" />} />
            <Route path="/apartment-with-kitchen" element={<PropertySection category="kitchen" />} />
            <Route path="/hotel-with-living-room" element={<PropertySection category="livingRoom" />} />

            {/* Dynamic Route for Property Details */}
            <Route path="/property/:propertyName" element={<PropertyDetail />} />
          </Routes>
        </Layout>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
