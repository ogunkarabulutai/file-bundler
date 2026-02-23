import React from 'react';
import { stepsData } from '@/data/mock';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">Süreç</span>
          <h2 className="heading-1 mb-4">{stepsData.title}</h2>
          <p className="body-medium text-muted-foreground max-w-2xl mx-auto">Basit ve etkili bir süreçle AI çözümlerinizi hayata geçiriyoruz.</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stepsData.steps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className="bg-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full border border-border/30 group">
                  <div className="mb-6">
                    <span className="text-4xl font-bold gradient-text">{step.number}</span>
                  </div>
                  <h3 className="heading-3 mb-3 group-hover:text-purple-600 transition-colors">{step.title}</h3>
                  <p className="body-small text-muted-foreground">{step.description}</p>
                  <div className="mt-6 flex items-center gap-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className={`h-1 flex-1 rounded-full transition-colors duration-300 ${i <= index ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-border'}`} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
