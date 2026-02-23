import { Battery, Zap, Shield } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6">
              About <span className="text-brand-green">EVRON</span>
            </h2>
            <div className="w-24 h-1 bg-brand-green mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-brand-green rounded-none flex items-center justify-center mb-4">
                <Battery className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">High Performance</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-black rounded-none flex items-center justify-center mb-4">
                <Shield className="w-10 h-10 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Maximum Safety</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-brand-green rounded-none flex items-center justify-center mb-4">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Built to Last</h3>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 border-l-4 border-brand-green">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              EVRON is an innovative energy company delivering{' '}
              <span className="font-bold text-black">reliable, high-performance, and safe</span>{' '}
              lithium battery and inverter solutions for homes, telecom infrastructure, electric vehicles, and solar systems. 
              Our advanced technology provides exceptional reliability, extended life cycles, and superior energy efficiency. 
              Whether you're powering residential applications, critical telecom networks, next-generation EVs, or 
              renewable solar installations, EVRON delivers the cutting-edge solutions that drive a sustainable and connected future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
