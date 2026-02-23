import React from 'react';
import { servicesData } from '@/data/mock';
import { Code, Phone, Settings } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  code: Code,
  phone: Phone,
  settings: Settings
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">Hizmetlerimiz</span>
          <h2 className="heading-1 mb-4">Neler Yapıyoruz?</h2>
          <p className="body-medium text-muted-foreground max-w-2xl mx-auto">İşletmenizi geleceğe taşıyacak yapay zeka çözümleri sunuyoruz.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className={`voice-card ${service.accent} group`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-14 h-14 rounded-xl bg-card/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="heading-3 mb-3">{service.title}</h3>
                <p className="body-small text-muted-foreground leading-relaxed">{service.description}</p>
                <a
                  href="https://instagram.com/agentasistan.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center text-sm font-medium text-foreground group-hover:translate-x-2 transition-transform duration-300"
                >
                  <span className="mr-2">Detaylı Bilgi</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
