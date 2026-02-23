import React from 'react';
import { statsData } from '@/data/mock';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, hsl(225 33% 98%) 0%, hsl(215 60% 96% / 0.5) 50%, hsl(225 33% 98%) 100%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">Verilerle Kanıtlanmış</span>
          <h2 className="heading-1 mb-4">{statsData.title}</h2>
          <p className="body-medium text-muted-foreground max-w-2xl mx-auto">{statsData.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Without AI */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/50 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{statsData.withoutAI.title}</h3>
                  <p className="text-sm text-muted-foreground">Geleneksel Yöntemler</p>
                </div>
              </div>
              <div className="space-y-4">
                {statsData.withoutAI.stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-red-50/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <stat.icon className="w-5 h-5 text-red-400" />
                      <span className="text-sm text-foreground">{stat.label}</span>
                    </div>
                    <span className="text-lg font-bold text-red-600">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* With AI */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-100/50 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{statsData.withAI.title}</h3>
                  <p className="text-sm text-muted-foreground">AI Destekli Çözümler</p>
                </div>
              </div>
              <div className="space-y-4">
                {statsData.withAI.stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-green-50/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <stat.icon className="w-5 h-5 text-green-400" />
                      <span className="text-sm text-foreground">{stat.label}</span>
                    </div>
                    <span className="text-lg font-bold text-green-600">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
