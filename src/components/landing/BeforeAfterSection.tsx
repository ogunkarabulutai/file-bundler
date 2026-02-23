import React, { useState, useRef } from 'react';
import { Sparkles, Image, Video, Volume2, VolumeX } from 'lucide-react';

const BeforeAfterSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const beforeImage = "https://customer-assets.emergentagent.com/job_smart-agent-hub-45/artifacts/pgk3bhoy_35419758_1-b2ada5-1650x1650.jpg";
  const afterVideoUrl = "https://customer-assets.emergentagent.com/job_smart-agent-hub-45/artifacts/5x0dhh9a_32ec78d6-9c35-4cfe-9498-2e63d8cf8d1e%20%281%29.mp4";

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-600 mb-4 bg-purple-50 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4" />
            Projelerimiz
          </span>
          <h2 className="heading-1 mb-4">Ürün Fotoğrafından UGC Videoya</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            <span className="font-semibold text-purple-600">UGC Go</span> ile sadece ürün fotoğrafınızı yükleyin, gerçek insanlarla profesyonel UGC videolar oluşturun.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* BEFORE */}
          <div className="relative group">
            <div className="absolute -top-4 left-4 z-10">
              <span className="bg-foreground text-background text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-full">Before</span>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-card/50">
              <img src={beforeImage} alt="Ürün görseli" className="w-full h-auto object-cover" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-3 py-1.5">
                <Image className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground">Ürün Fotoğrafı</span>
              </div>
            </div>
          </div>

          {/* AFTER */}
          <div className="relative group">
            <div className="absolute -top-4 left-4 z-10">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-full">After</span>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-card/50 cursor-pointer" onClick={handleVideoClick}>
              <video
                ref={videoRef}
                src={afterVideoUrl}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-3 py-1.5">
                <Video className="w-4 h-4 text-purple-500" />
                <span className="text-xs font-medium text-muted-foreground">UGC Video</span>
              </div>
              <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors">
                {isMuted ? <VolumeX className="w-5 h-5 text-muted-foreground" /> : <Volume2 className="w-5 h-5 text-purple-500" />}
              </button>
            </div>
          </div>
        </div>

        {/* Arrow between */}
        <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-16 h-16 rounded-full bg-card shadow-lg flex items-center justify-center border border-card/50">
            <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
