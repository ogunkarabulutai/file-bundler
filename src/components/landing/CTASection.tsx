import React from 'react';
import { ctaData } from '@/data/mock';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, hsl(225 33% 98%) 0%, hsl(215 60% 96% / 0.7) 50%, hsl(260 40% 96% / 0.8) 100%)' }} />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-purple-500" />
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Hemen Başlayın</span>
        </div>

        <h2 className="heading-hero mb-6">{ctaData.title}</h2>
        <p className="body-large text-muted-foreground max-w-xl mx-auto mb-10">{ctaData.description}</p>

        <a href="https://instagram.com/agentasistan.ai" target="_blank" rel="noopener noreferrer" className="btn-primary group text-base px-8 py-4">
          <span>{ctaData.button}</span>
          <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
          {["Ücretsiz Demo", "Kurulum Desteği", "7/24 Destek"].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
