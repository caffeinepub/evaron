import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Car, Sun, Radio, Zap, Shield, CheckCircle2 } from 'lucide-react';

export default function ProductsSection() {
  const products = [
    {
      title: 'EV Lithium Battery',
      technology: 'Lithium Iron Phosphate (LiFePO4)',
      description: 'Advanced battery technology designed for electric vehicles with exceptional performance and reliability.',
      image: '/assets/generated/ev-battery-product.dim_800x800.png',
      icon: Car,
      features: [
        '3000–5000 deep discharge cycles',
        'High energy density',
        'Lightweight design',
        'Smart inbuilt BMS',
        'Overcharge & over-discharge protection',
        'Short circuit protection',
        'Long operational life',
      ],
      warranty: '5 Years Full Replacement + 3 Years Pro-rata (Total 8 Years Warranty)',
    },
    {
      title: 'Solar Storage Battery',
      technology: 'Lithium Technology',
      description: 'Designed for solar energy systems.',
      image: '/assets/generated/solar-battery-product.dim_800x800.png',
      icon: Sun,
      features: [
        'Deep discharge support',
        'Fast charging capability',
        'Eco-friendly lithium technology',
        'Long cycle performance',
        'Stable voltage output',
      ],
      warranty: '8 Years Warranty',
    },
    {
      title: 'Telecom Battery',
      technology: 'High Reliability Lithium',
      description: 'High reliability lithium battery for telecom infrastructure and tower backup systems.',
      image: '/assets/generated/telecom-battery-product.dim_800x800.png',
      icon: Radio,
      features: [
        'Continuous power stability',
        'Smart BMS monitoring',
        'Temperature protection',
        'Heavy duty performance',
        'Long lifecycle durability',
      ],
      warranty: '8 Years Warranty',
    },
    {
      title: 'Lithium Inverter 2KW (2000W)',
      technology: 'Pure Sine Wave Output',
      description: 'Compact 2KW lithium inverter system providing seamless power conversion and backup.',
      image: '/assets/generated/inverter-2kw-product.dim_800x800.png',
      icon: Zap,
      features: [
        'Pure Sine Wave Output',
        '2000W capacity',
        'Smart charging system',
        'Heavy load support',
        'Advanced safety protection',
      ],
      warranty: '8 Years Battery + 2 Years Inverter',
    },
    {
      title: 'Lithium Inverter 3KW (3000W)',
      technology: 'High Power Output',
      description: 'Powerful 3KW lithium inverter system delivering high-capacity power conversion.',
      image: '/assets/generated/inverter-3kw-product.dim_800x800.png',
      icon: Zap,
      features: [
        '3000W high power output',
        'Smart BMS integration',
        'High efficiency performance',
        'Overload & short circuit protection',
        'Reliable backup solution',
      ],
      warranty: '8 Years Battery + 2 Years Inverter',
    },
  ];

  return (
    <section id="products" className="py-20 md:py-32 bg-black">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Our <span className="text-brand-green">Products</span>
          </h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-bold">
            Discover our comprehensive range of advanced battery solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-white border-0 rounded-none overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-brand-green flex items-center justify-center">
                  <product.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-black text-black mb-2">{product.title}</CardTitle>
                <Badge className="bg-brand-green text-white font-bold w-fit rounded-none">
                  {product.technology}
                </Badge>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-gray-700 text-base leading-relaxed mb-4 font-medium">
                  {product.description}
                </CardDescription>
                
                <div className="mb-4">
                  <h4 className="text-sm font-black text-black mb-2 uppercase tracking-wide">Features:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t-2 border-brand-green">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-brand-green flex-shrink-0" />
                    <p className="text-sm font-black text-black">{product.warranty}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
