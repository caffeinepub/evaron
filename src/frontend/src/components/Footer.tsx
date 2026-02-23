import { Mail, Phone, Heart } from 'lucide-react';
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (path: string) => {
    if (path.startsWith('/')) {
      window.location.href = path;
    } else {
      scrollToSection(path);
    }
  };

  return (
    <footer className="bg-black text-white py-16 border-t-4 border-brand-green">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo and Tagline */}
            <div className="md:col-span-2">
              <img
                src="/assets/generated/evron-logo.dim_400x400.png"
                alt="EVRON Logo"
                className="h-20 w-auto mb-4"
              />
              <p className="text-brand-green text-lg font-bold mb-4 tracking-wide">
                Drive the Future, Live the Green
              </p>
              <p className="text-gray-400 leading-relaxed font-medium">
                EVRON India Private Limited is a GST registered company operating under Indian corporate regulations.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-black text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleNavigation('about')}
                    className="text-gray-400 hover:text-brand-green transition-colors font-medium"
                  >
                    About EVRON
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation('products')}
                    className="text-gray-400 hover:text-brand-green transition-colors font-medium"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation('/terms')}
                    className="text-gray-400 hover:text-brand-green transition-colors font-medium"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation('/privacy')}
                    className="text-gray-400 hover:text-brand-green transition-colors font-medium"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation('contact')}
                    className="text-gray-400 hover:text-brand-green transition-colors font-medium"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-black text-white mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <a
                    href="tel:+919296174465"
                    className="text-gray-400 hover:text-brand-green transition-colors font-medium"
                  >
                    +91 9296174465
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <a
                    href="mailto:infoevronindia@gmail.com"
                    className="text-gray-400 hover:text-brand-green transition-colors break-all font-medium"
                  >
                    infoevronindia@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <h4 className="text-sm font-black text-white mb-3 uppercase tracking-wide">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-brand-green flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <SiFacebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-brand-green flex items-center justify-center transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <SiX className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-brand-green flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <SiLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-brand-green flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <SiInstagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm font-medium">
              © {new Date().getFullYear()} EVRON India Private Limited. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center font-medium">
              Built with <Heart className="w-4 h-4 mx-1 text-brand-green fill-brand-green" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'evron-app'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-brand-green hover:text-brand-green-dark transition-colors font-bold"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
