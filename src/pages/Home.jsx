import '../styles/Home.css';
import aboutImage from '../assets/images/about.png';
import cyclingIcon from '../assets/images/cycling.png';
import carIcon from '../assets/images/car.png';
import phoneImage from '../assets/phone.png';
import { bikeProducts } from '../data/bikeProducts';
import { carProducts } from '../data/carProducts';
import VehicleSelector from '../components/home/VehicleSelector';

const Home = () => {
  const featuredBike = bikeProducts.slice(0, 3).map(product => ({
    ...product,
    type: 'ride'
  }));
  
  const featuredCar = carProducts.slice(0, 3).map(product => ({
    ...product,
    type: 'drive'
  }));
  
  const allFeatured = [...featuredBike, ...featuredCar];

  return (
    <div>
      <section id="home" className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <h1 className="hero-title">
            R<span className="accent">&</span>D
          </h1>
          
          <div className="hero-icons-row">
            <span className="hero-icon-item">
              <img src={cyclingIcon} alt="cycling" />
              RIDE
            </span>
            <span style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900' }}>&</span>
            <span className="hero-icon-item">
              DRIVE
              <img src={carIcon} alt="car" />
            </span>
          </div>
        </div>

        <VehicleSelector />
      </section>

      <section id="quick-browse" className="quick-browse-section">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">Popular Products</h2>
          <p className="quick-browse-subtitle">Explore our best-selling accessories</p>
          <div className="quick-browse-grid">
            {[...bikeProducts.slice(0, 4), ...carProducts.slice(0, 4)].map((product) => {
              const type = bikeProducts.includes(product) ? 'ride' : 'drive';
              return (
                <div key={product.id} className="quick-product-card">
                  <div className="quick-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="quick-product-info">
                    <h4 className="quick-product-name">{product.name}</h4>
                    <p className="quick-product-brand">{product.brand}</p>
                    <p className="quick-product-compat">Compatible With: {product.subcategory}</p>
                    <div className="quick-product-footer">
                      <span className="quick-product-price">₹{product.price}</span>
                      <a href={`/product/${product.id}/${type}`} className="quick-view-btn">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-wrapper">
          <div className="about-left">
            <h2 className="section-title">About Us</h2>
            <div className="about-text">
              <p>
                R&D Ride and Drive is a premium destination for high-quality bike and car accessories. 
                We bring together style, performance, and protection for true automotive enthusiasts.
              </p>
              <p>
                Founded in 2026, we've been committed to delivering excellence in every product. 
                Our curated collection features only the finest brands and latest innovations.
              </p>
            </div>
            <div className="about-grid">
              <div className="about-card">
                <div className="about-card-icon">🏆</div>
                <h3>Our Story</h3>
                <p>Founded with a simple mission — to provide premium quality accessories for enthusiasts.</p>
              </div>
              <div className="about-card">
                <div className="about-card-icon">🎯</div>
                <h3>Our Vision</h3>
                <p>India's most trusted destination for stylish, high-performance auto accessories.</p>
              </div>
              <div className="about-card">
                <div className="about-card-icon">💎</div>
                <h3>Our Values</h3>
                <p>Quality, innovation, and customer satisfaction drive everything we do.</p>
              </div>
            </div>
          </div>
          <div className="about-right">
            <img src={aboutImage} alt="About R&D Ride and Drive" className="about-image" />
          </div>
        </div>
      </section>

      <section id="whatwedo" className="whatwedo-section">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="section-title">What We Do</h2>
          <div className="service-grid">
            <div className="service-card ride">
              <h3 style={{ color: '#00d9ff' }}>R RIDE</h3>
              <p>Premium motorcycle accessories including LED lights, crash guards, seat covers, exhausts and more.</p>
            </div>
            <div className="service-card drive">
              <h3 style={{ color: '#a855f7' }}>D DRIVE</h3>
              <p>Luxury car accessories - Matrix lights, carbon fiber kits, infotainment systems, interior & exterior upgrades.</p>
            </div>
            <div className="service-card ride">
              <h3 style={{ color: '#00d9ff' }}>Performance Gear</h3>
              <p>High-performance components designed to enhance your ride with cutting-edge technology and superior durability.</p>
            </div>
            <div className="service-card drive">
              <h3 style={{ color: '#a855f7' }}>Premium Protection</h3>
              <p>Advanced protection systems and safety features to keep your vehicle and passengers secure on every journey.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-wrapper">
          <div className="contact-left">
            <h2 className="section-title">Get In Touch</h2>
            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for your message! We will get back to you soon.');
              e.target.reset();
            }}>
              <div className="form-group">
                <label>Your Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input 
                  type="text" 
                  placeholder="Email" 
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea 
                  placeholder="Message" 
                  rows={4} 
                  required
                  className="form-input"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="contact-submit"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="contact-right">
            <img src={phoneImage} alt="Phone Call" className="phone-image" />
            <div className="contact-info">
              <h3 className="get">Contact Us</h3>

              <div className="address">
              <p>📍 Tamil Nadu, India</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@bikecarcollection.com</p>
              </div>
          </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="trust-badges-section">
        <div className="trust-badges-container">
          <div className="trust-badge">
            <div className="badge-icon">🚚</div>
            <h3>Free Delivery</h3>
            <p>Across India</p>
          </div>
          <div className="trust-badge">
            <div className="badge-icon">↩️</div>
            <h3>Easy Returns</h3>
            <p>10 Days Return Policy</p>
          </div>
          <div className="trust-badge">
            <div className="badge-icon">💳</div>
            <h3>Secure Payment</h3>
            <p>COD & Online Payment</p>
          </div>
          <div className="trust-badge">
            <div className="badge-icon">📞</div>
            <h3>Customer Support</h3>
            <p>Mon-Sat, 9AM-6PM</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
