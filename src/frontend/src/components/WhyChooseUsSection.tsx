import { Clock, Zap, Shield, Leaf, Battery, Cpu, Award } from 'lucide-react';

export default function WhyChooseUsSection() {
  const benefits = [
    {
      icon: Battery,
      title: 'Long Life Lithium Technology',
      description: 'Our batteries are engineered with advanced lithium technology for extended operational life with minimal degradation.',
    },
    {
      icon: Clock,
      title: '3000–5000 Deep Cycles',
      description: 'Industry-leading cycle performance ensures your battery lasts for years of reliable service.',
    },
    {
      icon: Cpu,
      title: 'Smart Advanced BMS',
      description: 'Intelligent Battery Management System monitors and optimizes performance for maximum safety and longevity.',
    },
    {
      icon: Award,
      title: '8 Years Warranty',
      description: 'Comprehensive warranty coverage with 5 years full replacement and 3 years pro-rata protection.',
    },
    {
      icon: Shield,
      title: 'High Safety Standards',
      description: 'Built with multiple safety layers and certified to meet the highest international safety standards.',
    },
    {
      icon: Leaf,
      title: 'Energy Efficient Systems',
      description: 'Optimized energy conversion and minimal power loss ensure maximum efficiency in every application.',
    },
    {
      icon: Zap,
      title: 'Reliable After-Sales Support',
      description: 'Dedicated customer support team ready to assist you with installation, maintenance, and service needs.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6">
            Why Choose <span className="text-brand-green">EVRON</span>
          </h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mb-8" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-bold">
            Experience the EVRON advantage with industry-leading battery technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 p-8 border-2 border-transparent hover:border-brand-green transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-green transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              <div className="relative">
                <div className="w-16 h-16 bg-black group-hover:bg-brand-green flex items-center justify-center mb-6 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-brand-green group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-black text-black mb-4">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed font-medium">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
