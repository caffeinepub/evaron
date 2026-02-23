import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PrivacyPage() {
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
                Privacy <span className="text-brand-green">Policy</span>
              </h1>
              <div className="w-24 h-1 bg-brand-green mx-auto mb-6" />
              <p className="text-lg text-gray-700 font-medium">
                Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
              </p>
            </div>

            <div className="space-y-8">
              {/* Information Collection */}
              <Card className="border-2 border-gray-200 rounded-none">
                <CardHeader className="border-b-2 border-brand-green">
                  <div className="flex items-center space-x-3">
                    <Database className="w-6 h-6 text-brand-green" />
                    <CardTitle className="text-2xl font-black text-black">Information We Collect</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4 font-medium">
                    When you contact us or inquire about our products, we may collect the following information:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">Personal identification information (Name, Phone Number, Email Address)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">Communication preferences and inquiry details</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">Technical information about your device and browser</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* How We Use Information */}
              <Card className="border-2 border-gray-200 rounded-none">
                <CardHeader className="border-b-2 border-brand-green">
                  <div className="flex items-center space-x-3">
                    <Eye className="w-6 h-6 text-brand-green" />
                    <CardTitle className="text-2xl font-black text-black">How We Use Your Information</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4 font-medium">
                    We use the collected information for the following purposes:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">To respond to your inquiries and provide customer support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">To process orders and deliver products and services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">To send product information and updates (with your consent)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">To improve our website and customer experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">To comply with legal obligations and protect our rights</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Protection */}
              <Card className="border-2 border-gray-200 rounded-none">
                <CardHeader className="border-b-2 border-brand-green">
                  <div className="flex items-center space-x-3">
                    <Lock className="w-6 h-6 text-brand-green" />
                    <CardTitle className="text-2xl font-black text-black">Data Protection & Security</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4 font-medium">
                    We implement appropriate security measures to protect your personal information:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">Secure data storage on the Internet Computer blockchain</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">Limited access to personal information by authorized personnel only</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">Regular security assessments and updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">No sharing of personal data with third parties without consent</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Your Rights */}
              <Card className="border-2 border-gray-200 rounded-none">
                <CardHeader className="border-b-2 border-brand-green">
                  <div className="flex items-center space-x-3">
                    <UserCheck className="w-6 h-6 text-brand-green" />
                    <CardTitle className="text-2xl font-black text-black">Your Rights</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4 font-medium">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">Right to access your personal data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">Right to correct inaccurate information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">Right to request deletion of your data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">Right to opt-out of marketing communications</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Cookies */}
              <Card className="border-2 border-gray-200 rounded-none">
                <CardHeader className="border-b-2 border-brand-green">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-brand-green" />
                    <CardTitle className="text-2xl font-black text-black">Cookies & Tracking</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 font-medium">
                    Our website may use cookies and similar tracking technologies to enhance your browsing experience. 
                    You can control cookie settings through your browser preferences. Disabling cookies may affect 
                    website functionality.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="bg-black p-8 text-center">
                <p className="text-white text-lg mb-4 font-bold">
                  For privacy-related questions or to exercise your rights, contact us:
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

              {/* Last Updated */}
              <div className="text-center text-gray-600 text-sm font-medium">
                <p>Last Updated: February 2026</p>
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
