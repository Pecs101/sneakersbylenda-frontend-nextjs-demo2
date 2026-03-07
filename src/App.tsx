import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ApparelDetail from './pages/ApparelDetail';
import SneakersPage from './pages/SneakersPage';
import EventDetail from './pages/EventDetail';
import Vault from './pages/Vault';
import Contact from './pages/Contact';
import Calendar from './pages/Calendar';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <CartProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sneakers" element={<SneakersPage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/apparel/:id" element={<ApparelDetail />} />
                <Route path="/event/:id" element={<EventDetail />} />
                <Route path="/vault" element={<Vault />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </CartProvider>
  );
}
