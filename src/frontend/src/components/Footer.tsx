import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'evron-battery';

  return (
    <footer className="bg-black border-t-4 border-brand-green">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="mb-6">
              <img
                src="/assets/generated/evron-logo.dim_400x200.png"
                alt="EVRON Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-brand-green text-base font-semibold mb-4 tracking-wide">
              Drive the Future, Live the Green
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-green flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <a 
                  href="tel:+919296174465" 
                  className="text-xl font-black text-brand-green hover:text-brand-green-dark transition-colors"
                >
                  +91 9296174465
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-green flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <a 
                  href="mailto:infoevronindia@gmail.com" 
                  className="text-base text-gray-300 hover:text-brand-green transition-colors"
                >
                  infoevronindia@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-black text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-green transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-green transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-brand-green transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-black text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white hover:bg-brand-green flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <SiFacebook className="w-5 h-5 text-black group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white hover:bg-brand-green flex items-center justify-center transition-colors group"
                aria-label="X (Twitter)"
              >
                <SiX className="w-5 h-5 text-black group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white hover:bg-brand-green flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-5 h-5 text-black group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white hover:bg-brand-green flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <SiInstagram className="w-5 h-5 text-black group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} <span className="font-bold text-white">EVRON</span>. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
