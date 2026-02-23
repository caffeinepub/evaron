import { createRouter, RouterProvider, createRoute, createRootRoute } from '@tanstack/react-router';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ContactSection from './components/ContactSection';
import AddressSection from './components/AddressSection';
import Footer from './components/Footer';
import TermsPage from './components/TermsPage';
import PrivacyPage from './components/PrivacyPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ContactSection />
      <AddressSection />
      <Footer />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => <RouterProvider router={router} />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/terms',
  component: TermsPage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy',
  component: PrivacyPage,
});

const routeTree = rootRoute.addChildren([indexRoute, termsRoute, privacyRoute]);

const router = createRouter({ routeTree });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
