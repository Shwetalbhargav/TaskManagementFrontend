import Hero from '@/components/sections/Hero';
import WhyAsana from '@/components/sections/WhyAsana';
import Automation from '@/components/sections/Automation';
import ConnectWork from '@/components/sections/ConnectWork';
import Preview from '@/components/sections/Preview';
import Integrations from '@/components/sections/Integrations';
import Templates from '@/components/sections/Templates';
import Features from '@/components/sections/Features';
import AdvancedFeatures from '@/components/sections/AdvancedFeatures';
import FAQ from '@/components/sections/FAQ';
import CallToAction from '@/components/sections/CallToAction';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LoginPage from "@/components/layout/loginpage";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <WhyAsana />
        <Automation />
        <ConnectWork />
        <Preview />
        <Integrations />
        <Templates />
        <Features />
        <AdvancedFeatures />
        <FAQ />
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}
