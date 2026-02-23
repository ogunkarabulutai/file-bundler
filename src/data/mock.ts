import { PhoneCall, Clock, Users, DollarSign, PhoneMissed, UserX, type LucideIcon } from 'lucide-react';

export const heroData = {
  headline: "İşletmeniz İçin Akıllı AI Asistanlar",
  subheadline: "Sesli AI Agent'lar, otomasyonlar ve özel yapay zeka projeleriyle müşteri iletişiminizi 7/24 yöneten akıllı çözümler geliştiriyoruz.",
  ctaPrimary: "Demo Talep Et",
  ctaSecondary: "Nasıl Çalışıyor?"
};

export const navigationData = {
  links: [
    { label: "Hizmetler", href: "#services" },
    { label: "Projeler", href: "#projects" },
    { label: "Nasıl Çalışır", href: "#how-it-works" },
    { label: "İletişim", href: "#contact" }
  ],
  ctaButton: "Hemen Başla"
};

export const servicesData = [
  {
    id: 1,
    title: "Uygulama Geliştirme",
    description: "Özel ihtiyaçlarınıza uygun, yapay zeka destekli web ve mobil uygulamalar geliştiriyoruz. Otomasyon, veri işleme ve entegrasyon süreçlerini uçtan uca yönetiyoruz.",
    icon: "code" as const,
    accent: "accent-blue"
  },
  {
    id: 2,
    title: "Sesli AI Agent",
    description: "Müşterilerinizi arayan, gelen çağrıları karşılayan, randevu alan ve bilgi toplayan insan gibi konuşan sesli yapay zeka asistanları geliştiriyoruz.",
    icon: "phone" as const,
    accent: "accent-purple"
  },
  {
    id: 3,
    title: "AI Proje & Otomasyon",
    description: "CRM, WhatsApp, çağrı sistemleri ve iş süreçlerinizi yapay zeka ile otomatikleştiriyoruz.",
    icon: "settings" as const,
    accent: "accent-orange"
  }
];

export const benefitsData = {
  title: "Sesli AI Agent Ne Kazandırır?",
  tagline: "Tek bir müşteri bile kaçırmayın.",
  benefits: [
    { id: 1, text: "Aynı anda yüzlerce aramayı karşılayabilir", icon: "phone-call" },
    { id: 2, text: "7/24 kesintisiz çalışır, mesai kavramı yoktur", icon: "clock" },
    { id: 3, text: "İnsan gibi konuşur, robotik değildir", icon: "users" },
    { id: 4, text: "Görüşmeleri analiz eder ve raporlar", icon: "bar-chart" },
    { id: 5, text: "Kaçan çağrı problemini tamamen ortadan kaldırır", icon: "refresh-cw" },
    { id: 6, text: "Birden fazla gelen çağrıyı aynı anda yönetir", icon: "zap" }
  ]
};

interface StatItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const statsData = {
  title: "AI Asistan Kullanan vs Kullanmayan İşletmeler",
  subtitle: "Rakamlar her şeyi anlatıyor. AI destekli müşteri hizmetleri ile farkı görün.",
  withoutAI: {
    title: "AI Kullanmayan İşletmeler",
    stats: [
      { icon: PhoneMissed, label: "Kaçırılan Çağrı Oranı", value: "%35" },
      { icon: Clock, label: "Ortalama Bekleme Süresi", value: "8+ dk" },
      { icon: UserX, label: "Müşteri Kaybı Oranı", value: "%28" },
      { icon: DollarSign, label: "Aylık Kayıp", value: "₺50K+" }
    ] as StatItem[]
  },
  withAI: {
    title: "AI Kullanan İşletmeler",
    stats: [
      { icon: PhoneCall, label: "Çağrı Karşılama Oranı", value: "%99" },
      { icon: Clock, label: "Ortalama Yanıt Süresi", value: "3 sn" },
      { icon: Users, label: "Müşteri Memnuniyeti", value: "%94" },
      { icon: DollarSign, label: "Aylık Tasarruf", value: "₺35K+" }
    ] as StatItem[]
  }
};

export const stepsData = {
  title: "Nasıl Çalışıyor?",
  steps: [
    {
      id: 1,
      number: "01",
      title: "İhtiyaç Analizi",
      description: "İşletmenizin ihtiyaçlarını analiz ediyor, en uygun AI çözümünü belirliyoruz."
    },
    {
      id: 2,
      number: "02",
      title: "Özel Geliştirme",
      description: "Markanıza özel AI asistanı geliştiriyor, ses tonunu ve senaryoları oluşturuyoruz."
    },
    {
      id: 3,
      number: "03",
      title: "Entegrasyon",
      description: "Mevcut sistemlerinize sorunsuz entegrasyon sağlıyor, test ediyoruz."
    },
    {
      id: 4,
      number: "04",
      title: "Canlıya Alma",
      description: "Sistemi canlıya alıyor, performansı izliyor ve sürekli iyileştiriyoruz."
    }
  ]
};

export const ctaData = {
  title: "İşletmenizi AI ile Dönüştürmeye Hazır mısınız?",
  description: "Hemen bizimle iletişime geçin, işletmenize özel AI çözümünü birlikte tasarlayalım.",
  button: "Hemen Başlayın"
};

export const footerData = {
  tagline: "İşletmeniz için akıllı AI çözümleri geliştiriyoruz.",
  links: [
    { label: "Hizmetler", href: "#services" },
    { label: "Projeler", href: "#projects" },
    { label: "Nasıl Çalışır", href: "#how-it-works" },
    { label: "İletişim", href: "#contact" }
  ]
};

export const trustData = {
  title: "Güvenilir Teknoloji Altyapısı",
  description: "En son teknoloji ve güvenlik standartlarıyla işletmenizin verilerini koruyoruz."
};
