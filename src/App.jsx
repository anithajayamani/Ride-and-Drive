import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import BikeParts from './pages/BikeParts';
import CarParts from './pages/CarParts';
import Brands from './pages/Brands';
import PartsResults from './pages/PartsResults';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';           
import Footer from './components/common/Footer';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Wishlist from './pages/Wishlist';
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
              <Navbar />
              
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/bike-parts" element={<BikeParts />} />
                  <Route path="/car-parts" element={<CarParts />} />
                  <Route path="/brands" element={<Brands />} />
                  <Route path="/parts-results" element={<PartsResults />} />
                  <Route path="/product/:id/:type" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </main>

              <Footer />
            </div>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;