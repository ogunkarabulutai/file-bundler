import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import ServicesSection from '@/components/landing/ServicesSection';
import BeforeAfterSection from '@/components/landing/BeforeAfterSection';
import AgentEmlakSection from '@/components/landing/AgentEmlakSection';
import StatsSection from '@/components/landing/StatsSection';
import BenefitsSection from '@/components/landing/BenefitsSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BeforeAfterSection />
        <AgentEmlakSection />
        <StatsSection />
        <BenefitsSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
