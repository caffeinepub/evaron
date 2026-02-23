import { Building2, MapPin, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6">
              About <span className="text-brand-green">EVRON India Private Limited</span>
            </h2>
            <div className="w-24 h-1 bg-brand-green mx-auto mb-8" />
          </div>

          <div className="bg-gray-50 p-8 md:p-12 border-l-4 border-brand-green mb-12">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
              <span className="font-black text-black">EVRON India Private Limited</span> is a{' '}
              <span className="font-bold text-brand-green">GST registered</span> energy solutions company based in{' '}
              <span className="font-bold text-black">Jharkhand, India</span>.
            </p>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
              We specialize in advanced <span className="font-bold text-black">Lithium Iron Phosphate (LiFePO4) batteries</span>,{' '}
              Telecom Batteries, Solar Storage Solutions and Lithium Inverter Systems designed to deliver long-lasting, 
              energy-efficient and sustainable power solutions.
            </p>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Our products are engineered with <span className="font-bold text-black">advanced BMS protection</span>,{' '}
              <span className="font-bold text-brand-green">3000–5000 cycle performance</span> and high safety standards 
              to ensure reliable power backup for homes, telecom networks and electric mobility solutions.
            </p>
          </div>

          {/* Company Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-black border-0 rounded-none">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-brand-green flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Company Details</h3>
                </div>
                <div className="space-y-3 text-gray-300">
                  <div>
                    <p className="text-sm font-bold text-brand-green uppercase tracking-wide">Legal Name</p>
                    <p className="text-lg font-bold text-white">EVRON India Private Limited</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-green uppercase tracking-wide">GSTIN</p>
                    <p className="text-lg font-bold text-white">20AAJCE1166D1Z8</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center">
              <img
                src="/assets/generated/gst-badge.dim_200x200.png"
                alt="GST Registered"
                className="h-40 w-auto"
              />
            </div>
          </div>

          {/* Office Addresses */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-2 border-gray-200 rounded-none hover:border-brand-green transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-brand-green flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-black">Registered Office</h3>
                </div>
                <address className="not-italic text-gray-700 leading-relaxed">
                  <p className="font-bold">P-22, City Center, Sector-4</p>
                  <p>Near Circus Maidan</p>
                  <p className="font-bold">Bokaro Steel City – 827004</p>
                </address>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 rounded-none hover:border-brand-green transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-brand-green flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-black">Branch Office</h3>
                </div>
                <address className="not-italic text-gray-700 leading-relaxed">
                  <p className="font-bold">Plot No-673, Ranchi Road</p>
                  <p>Redma Women's ITI</p>
                  <p>South Daltonganj, Palamu</p>
                  <p className="font-bold">Jharkhand – 822102</p>
                </address>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
