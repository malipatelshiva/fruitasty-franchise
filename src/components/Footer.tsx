import { Apple, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-2 rounded-xl">
                <Apple className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">FRUITASTY</span>
            </div>
            <p className="text-gray-400 text-sm">
              Fresh Brands. Proven Business. Scalable Success.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">
                About
              </Link>
              <Link to="/brands" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Our Brands
              </Link>
              <Link to="/franchise" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Franchise
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:franchise@fruitasty.in" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4" />
                <span>franchise@fruitasty.in</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Monday - Sunday</p>
              <p className="text-white font-medium">10:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fruitasty India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
