import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-background.dim_1920x1080.png"
          alt="Battery Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="/assets/generated/evron-logo.dim_400x200.png"
              alt="EVRON Logo"
              className="h-20 md:h-24 w-auto"
            />
            <p className="text-brand-green text-lg md:text-xl font-semibold mt-2 tracking-wide">
              Drive the Future, Live the Green
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            EVRON – Powering the <span className="text-brand-green">Future</span> of Energy
          </h1>
          <p className="text-xl md:text-3xl text-gray-200 mb-8 font-medium">
            Advanced Lithium Batteries & Inverter Solutions
          </p>
          
          {/* Phone Number Display */}
          <div className="flex items-center space-x-3 mb-10">
            <div className="w-14 h-14 bg-brand-green flex items-center justify-center">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium">Call Us Now</p>
              <a 
                href="tel:+919296174465" 
                className="text-3xl md:text-4xl font-black text-brand-green hover:text-brand-green-dark transition-colors"
              >
                +91 9296174465
              </a>
            </div>
          </div>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-brand-green hover:bg-brand-green-dark text-white font-bold text-lg px-8 py-6 h-auto rounded-none shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            Contact Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
