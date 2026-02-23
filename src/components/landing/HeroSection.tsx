import React from 'react';
import { heroData } from '@/data/mock';
import { Phone, Mic, Waves } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-card/40 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">AI Destekli Çözümler</span>
        </div>

        <h1 className="heading-hero mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {heroData.headline}
        </h1>

        <p className="body-large text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {heroData.subheadline}
        </p>

        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }} />

        <div className="relative max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="bg-card/60 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-card/40">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">AI Asistan Aktif</p>
                <p className="text-xs text-muted-foreground">Çağrı yanıtlanıyor...</p>
              </div>
              <div className="ml-auto flex items-center gap-1">
                <span className="w-1 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="w-1 h-5 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
                <span className="w-1 h-4 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <span className="w-1 h-6 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                <span className="w-1 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>

            <div className="flex items-center gap-3 bg-background/50 rounded-xl p-3">
              <Mic className="w-5 h-5 text-muted-foreground" />
              <div className="flex-1 flex items-center gap-1">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-1 bg-muted-foreground/30 rounded-full animate-pulse" style={{ height: `${Math.random() * 16 + 4}px`, animationDelay: `${i * 0.05}s` }} />
                ))}
              </div>
              <Waves className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
