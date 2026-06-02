import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="text-4xl font-black tracking-tighter mb-4">
              R<span className="text-cyan-400">&</span>D
            </div>

            <p className="text-zinc-400 leading-relaxed">
              Premium accessories for bikes and cars.
              Ride Bold. Drive Premium.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>

            <div className="space-y-3 text-zinc-400">
              <Link to="/" className="block hover:text-cyan-400 transition">
                Home
              </Link>

              <Link to="/ride" className="block hover:text-cyan-400 transition">
                Bike
              </Link>

              <Link to="/drive" className="block hover:text-cyan-400 transition">
                Car
              </Link>

              <Link to="/about" className="block hover:text-cyan-400 transition">
                About Us
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Support</h3>

            <div className="space-y-3 text-zinc-400">
              <Link to="/contact" className="block hover:text-cyan-400 transition">
                Contact Us
              </Link>

              <a href="#" className="block hover:text-cyan-400 transition">
                Track Order
              </a>

              <a href="#" className="block hover:text-cyan-400 transition">
                Warranty
              </a>

              <a href="#" className="block hover:text-cyan-400 transition">
                FAQs
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-zinc-800 mt-16 pt-8 text-center text-zinc-500 text-sm">
          © 2026 R&D Ride and Drive. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;