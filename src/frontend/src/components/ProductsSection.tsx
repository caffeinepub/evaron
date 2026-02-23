import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Car, Sun, Radio, Zap } from 'lucide-react';

export default function ProductsSection() {
  const products = [
    {
      title: 'EV Lithium Battery',
      description: 'High-capacity lithium batteries designed for electric vehicles with fast charging capabilities and extended range.',
      image: '/assets/generated/ev-battery.dim_800x600.png',
      icon: Car,
    },
    {
      title: 'Solar Storage Battery',
      description: 'Efficient energy storage solutions for residential and commercial solar systems with smart energy management.',
      image: '/assets/generated/solar-battery.dim_800x600.png',
      icon: Sun,
    },
    {
      title: 'Telecom Battery',
      description: 'Reliable power solutions for telecom infrastructure ensuring uninterrupted connectivity and network uptime.',
      image: '/assets/generated/telecom-battery.dim_800x600.png',
      icon: Radio,
    },
    {
      title: 'Lithium Inverter 2KW (2000W)',
      description: 'Compact 2KW lithium inverter system providing seamless power conversion and backup for homes and small businesses.',
      image: '/assets/generated/inverter-2kw.dim_800x600.png',
      icon: Zap,
    },
    {
      title: 'Lithium Inverter 3KW (3000W)',
      description: 'Powerful 3KW lithium inverter system delivering high-capacity power conversion for larger residential and commercial applications.',
      image: '/assets/generated/inverter-3kw.dim_800x600.png',
      icon: Zap,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Our <span className="text-brand-green">Products</span>
          </h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive range of advanced battery solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-white border-0 rounded-none overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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
                <CardTitle className="text-2xl font-black text-black">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
