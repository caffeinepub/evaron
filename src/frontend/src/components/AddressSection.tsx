import { MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AddressSection() {
  const addresses = [
    {
      title: 'Head Office',
      lines: [
        'P-22, City Center, Sector-4,',
        'Near Circus Maidan,',
        'Bokaro Steel City – 827004',
      ],
    },
    {
      title: 'Branch Office',
      lines: [
        'Plot No-673, Ranchi Road,',
        'Redma Women\'s ITI,',
        'South Daltonganj, Palamu,',
        'Jharkhand – 822102',
      ],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6">
            Our <span className="text-brand-green">Locations</span>
          </h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mb-8" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Visit us at our offices across Jharkhand
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {addresses.map((address, index) => (
            <Card
              key={index}
              className="bg-black border-0 rounded-none overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <CardHeader className="pb-4 border-b-4 border-brand-green">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-brand-green flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-black text-white">
                    {address.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <address className="not-italic text-gray-300 text-base md:text-lg leading-relaxed space-y-1">
                  {address.lines.map((line, lineIndex) => (
                    <p key={lineIndex}>{line}</p>
                  ))}
                </address>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
