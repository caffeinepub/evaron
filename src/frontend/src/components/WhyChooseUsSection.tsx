import { Clock, Zap, Shield, Leaf } from 'lucide-react';

export default function WhyChooseUsSection() {
  const benefits = [
    {
      icon: Clock,
      title: 'Long Life Cycle',
      description: 'Our batteries are engineered for extended operational life with minimal degradation over time.',
    },
    {
      icon: Zap,
      title: 'Fast Charging',
      description: 'Advanced charging technology enables rapid power replenishment without compromising battery health.',
    },
    {
      icon: Shield,
      title: 'High Safety Standards',
      description: 'Built with multiple safety layers and certified to meet the highest international safety standards.',
    },
    {
      icon: Leaf,
      title: 'Energy Efficient',
      description: 'Optimized energy conversion and minimal power loss ensure maximum efficiency in every application.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6">
            Why Choose <span className="text-brand-orange">EVARON</span>
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mb-8" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experience the EVARON advantage with industry-leading battery technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 p-8 border-2 border-transparent hover:border-brand-orange transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-orange transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              <div className="relative">
                <div className="w-16 h-16 bg-black group-hover:bg-brand-orange flex items-center justify-center mb-6 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-black text-black mb-4">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
