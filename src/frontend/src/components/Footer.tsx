import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'evaron-battery';

  return (
    <footer className="bg-black border-t-4 border-brand-orange">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="mb-6">
              <img
                src="/assets/generated/logo.dim_200x80.png"
                alt="EVARON Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading provider of advanced lithium and EV battery solutions for a sustainable future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-black text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-brand-orange transition-colors">
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
                className="w-10 h-10 bg-white hover:bg-brand-orange flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <SiFacebook className="w-5 h-5 text-black group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white hover:bg-brand-orange flex items-center justify-center transition-colors group"
                aria-label="X (Twitter)"
              >
                <SiX className="w-5 h-5 text-black group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white hover:bg-brand-orange flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-5 h-5 text-black group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white hover:bg-brand-orange flex items-center justify-center transition-colors group"
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
            © {currentYear} <span className="font-bold text-white">EVARON</span>. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
