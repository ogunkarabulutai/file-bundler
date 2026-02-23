import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationData } from '@/data/mock';

const logoUrl = "https://customer-assets.emergentagent.com/job_smart-agent-hub-45/artifacts/zfgh49h9_ARKA%20PLAN%20TEMI%CC%87Z%20LOGO%20AGENT.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center">
            <img src={logoUrl} alt="Agent Asistan" className="h-12 sm:h-14 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navigationData.links.map((link, index) => (
              <a key={index} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="https://instagram.com/agentasistan.ai" target="_blank" rel="noopener noreferrer" className="btn-primary">
              {navigationData.ctaButton}
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-in-up" style={{ animationDuration: '0.3s' }}>
            <div className="flex flex-col gap-4">
              {navigationData.links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="https://instagram.com/agentasistan.ai" target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
                {navigationData.ctaButton}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
