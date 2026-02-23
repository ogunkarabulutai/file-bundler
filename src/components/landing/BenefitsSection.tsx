import React from 'react';
import { benefitsData } from '@/data/mock';
import { PhoneCall, Clock, Users, BarChart, RefreshCw, Zap } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'phone-call': PhoneCall,
  'clock': Clock,
  'users': Users,
  'bar-chart': BarChart,
  'refresh-cw': RefreshCw,
  'zap': Zap
};

const BenefitsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, hsl(225 33% 98%) 0%, hsl(260 40% 96% / 0.4) 50%, hsl(225 33% 98%) 100%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">Avantajlar</span>
          <h2 className="heading-1 mb-4">{benefitsData.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefitsData.benefits.map((benefit) => {
            const IconComponent = iconMap[benefit.icon];
            return (
              <div key={benefit.id} className="bg-card/70 backdrop-blur-sm rounded-xl p-6 hover:bg-card hover:shadow-lg transition-all duration-300 group border border-card/50">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && <IconComponent className="w-6 h-6 text-purple-600" />}
                  </div>
                  <p className="body-medium text-foreground/80 pt-2">{benefit.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-sm border border-card/50">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
            <p className="text-lg font-medium text-foreground italic">"{benefitsData.tagline}"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
