import React from 'react';
import { footerData } from '@/data/mock';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const logoUrl = "https://customer-assets.emergentagent.com/job_smart-agent-hub-45/artifacts/zfgh49h9_ARKA%20PLAN%20TEMI%CC%87Z%20LOGO%20AGENT.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <img src={logoUrl} alt="Agent Asistan" className="h-14 w-auto mb-4 brightness-0 invert" />
            <p className="text-gray-400 text-sm mb-6 max-w-sm">{footerData.tagline}</p>
            <p className="text-gray-500 text-xs mb-4">İşletmeniz için akıllı AI çözümleri geliştiriyoruz.</p>
            <a href="https://instagram.com/agentasistan.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm">@agentasistan.ai</span>
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Hızlı Linkler</h4>
            <ul className="space-y-3">
              {footerData.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@agentasistan.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>+90 (850) 123 45 67</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-gray-500 text-sm text-center">© {new Date().getFullYear()} Agent Asistan. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
