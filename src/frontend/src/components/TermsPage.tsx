import { ArrowLeft, Shield, FileText, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function TermsPage() {
  const handleBackHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black py-6 border-b-4 border-brand-green">
        <div className="container px-4">
          <div className="flex items-center justify-between">
            <img
              src="/assets/generated/evron-logo.dim_400x400.png"
              alt="EVRON Logo"
              className="h-16 w-auto"
            />
            <Button
              onClick={handleBackHome}
              variant="outline"
              className="bg-transparent border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-bold rounded-none"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-black text-black mb-4">
                Terms & <span className="text-brand-green">Conditions</span>
              </h1>
              <div className="w-24 h-1 bg-brand-green mx-auto mb-6" />
              <p className="text-lg text-gray-700 font-medium">
                Please read these terms and conditions carefully before using our products
              </p>
            </div>

            <div className="space-y-8">
              {/* General Terms */}
              <Card className="border-2 border-gray-200 rounded-none">
                <CardHeader className="border-b-2 border-brand-green">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-brand-green" />
                    <CardTitle className="text-2xl font-black text-black">General Terms</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">Product specifications are subject to change without prior notice.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">Warranty is valid only with the original invoice.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">Installation must follow recommended guidelines provided by EVRON.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">The company reserves the right to inspect the product before warranty approval.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Warranty Policy */}
              <Card className="border-2 border-gray-200 rounded-none">
                <CardHeader className="border-b-2 border-brand-green">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-brand-green" />
                    <CardTitle className="text-2xl font-black text-black">Warranty Policy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 border-l-4 border-brand-green">
                      <h3 className="text-xl font-black text-black mb-3">Lithium Battery Warranty</h3>
                      <p className="text-gray-700 font-bold text-lg mb-2">
                        Total 8 Years Warranty Coverage
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="font-medium">5 Years Full Replacement Warranty</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="font-medium">3 Years Pro-rata Warranty</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 border-l-4 border-brand-green">
                      <h3 className="text-xl font-black text-black mb-3">Inverter Warranty</h3>
                      <p className="text-gray-700 font-medium">
                        2 Years warranty against manufacturing defects
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Warranty Exclusions */}
              <Card className="border-2 border-gray-200 rounded-none">
                <CardHeader className="border-b-2 border-brand-green">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-6 h-6 text-brand-green" />
                    <CardTitle className="text-2xl font-black text-black">Warranty Does Not Cover</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">Physical damage or impact damage to the product</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">Water damage or exposure to moisture</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">Improper installation not following EVRON guidelines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">Unauthorized modifications or repairs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">External wiring faults or electrical issues</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="bg-black p-8 text-center">
                <p className="text-white text-lg mb-4 font-bold">
                  For warranty claims or questions, please contact us:
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
                  <a
                    href="tel:+919296174465"
                    className="text-brand-green hover:text-brand-green-dark font-black text-xl transition-colors"
                  >
                    +91 9296174465
                  </a>
                  <span className="text-gray-500 hidden md:inline">|</span>
                  <a
                    href="mailto:infoevronindia@gmail.com"
                    className="text-brand-green hover:text-brand-green-dark font-bold transition-colors"
                  >
                    infoevronindia@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8 border-t-4 border-brand-green">
        <div className="container px-4">
          <div className="text-center">
            <p className="text-gray-400 text-sm font-medium">
              © {new Date().getFullYear()} EVRON India Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
