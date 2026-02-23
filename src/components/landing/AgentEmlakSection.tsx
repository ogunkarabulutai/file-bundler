import React from 'react';
import { Video, Clock, TrendingUp, Eye, Building2, Image } from 'lucide-react';
import agentEmlakVideo from '@/assets/agent-emlak-tanitim.mp4';

const AgentEmlakSection = () => {
  const beforeImage = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop";

  const benefits = [
    { icon: Video, title: "Profesyonel Video Tanıtım", description: "Gerçek karakterler ile etkileyici ev tanıtım videoları" },
    { icon: Clock, title: "Hızlı Üretim", description: "Dakikalar içinde profesyonel kalitede içerik" },
    { icon: TrendingUp, title: "Satış Hızı Artışı", description: "Videolu ilanlar %73 daha hızlı satılıyor" },
    { icon: Eye, title: "Daha Fazla Görüntülenme", description: "Video içerikler 5x daha fazla etkileşim alıyor" }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, hsl(225 33% 98%) 0%, hsl(195 60% 96% / 0.6) 50%, hsl(225 33% 98%) 100%)' }} />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-600 mb-4 bg-cyan-50 px-4 py-2 rounded-full">
            <Building2 className="w-4 h-4" />
            Emlakçılara Özel
          </span>
          <h2 className="heading-1 mb-4">Boş Evleri Konuşturun</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            <span className="font-semibold text-cyan-600">Agent Emlak</span> ile sadece ev fotoğrafınızı yükleyin, gerçek karakterler evinizi videolu olarak tanıtsın.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {benefits.map((benefit, index) => {
            const IconComp = benefit.icon;
            return (
              <div key={index} className="bg-card/70 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-card hover:shadow-lg transition-all duration-300 border border-card/50">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-3">
                  <IconComp className="w-5 h-5 text-cyan-600" />
                </div>
                <h4 className="text-sm font-medium text-foreground mb-1">{benefit.title}</h4>
                <p className="text-xs text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative group">
            <div className="absolute -top-4 left-4 z-10">
              <span className="bg-foreground text-background text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-full">Ev Fotoğrafı</span>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-card/50">
              <img src={beforeImage} alt="Boş ev" className="w-full h-64 object-cover" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-3 py-1.5">
                <Image className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground">Kaynak Görsel</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -top-4 left-4 z-10">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-full">AI Video</span>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-card/50 flex items-center justify-center bg-black">
              <video
                src={agentEmlakVideo}
                controls
                playsInline
                className="w-auto h-auto max-h-[500px] rounded-2xl"
                style={{ aspectRatio: '9/16' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentEmlakSection;
