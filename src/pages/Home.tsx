import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Layers, 
  Factory,
  Scissors
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ContactCTA from '../components/ContactCTA';
import { Link, useLocation } from 'react-router-dom';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="images/home-image3.jpg"
        >
          <source src="/herobackground.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <img 
            src="images/home-image3.jpg" 
            alt="Premium Textile Fabric Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-sans font-medium text-white leading-[1.1] mb-8 tracking-tighter uppercase max-w-5xl">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-normal mb-12 leading-relaxed max-w-2xl">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/products" className="group relative px-12 py-5 overflow-hidden border border-white transition-all duration-300">
              <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 font-medium text-xs uppercase tracking-[0.4em] text-white group-hover:text-brand-deep transition-colors duration-500">
                {t.hero.cta}
              </span>
            </Link>
            <Link to="/about" className="group relative px-12 py-5 overflow-hidden border border-white/30 hover:border-white transition-all duration-300">
              <span className="relative z-10 font-medium text-xs uppercase tracking-[0.4em] text-white">
                {t.nav.about}
              </span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

const KeyFeatures = () => {
  const { t } = useLanguage();
  const features = [
    {
      num: "01",
      icon: <Layers size={24} strokeWidth={1.2} className="text-brand-deep" />,
      title: t.features.quality.title,
      description: t.features.quality.desc
    },
    {
      num: "02",
      icon: <Factory size={24} strokeWidth={1.2} className="text-brand-deep" />,
      title: t.features.production.title,
      description: t.features.production.desc
    },
    {
      num: "03",
      icon: <Scissors size={24} strokeWidth={1.2} className="text-brand-deep" />,
      title: t.features.custom.title,
      description: t.features.custom.desc
    }
  ];

  return (
    <section className="py-0 bg-brand-light border-y border-brand-deep/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col p-12 md:p-20 ${
                idx !== 0 ? 'md:border-l border-brand-deep/10' : ''
              } ${idx !== features.length - 1 ? 'border-b md:border-b-0 border-brand-deep/10' : ''}`}
            >
              <span className="text-[10px] font-medium text-brand-deep/60 mb-12 tracking-[0.3em]">
                {feature.num}
              </span>
              <div className="mb-8">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-brand-heading mb-8 tracking-widest uppercase leading-tight">
                {feature.title}
              </h3>
              <p className="text-brand-body text-[12px] font-medium uppercase tracking-wider leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProducts = () => {
  const { t, lang } = useLanguage();
  const featuredProducts = [
    {
      id: 'cotton-twill',
      name: lang === 'en' ? 'Cool Silk Cotton T400 Cavalry Twill' : '酷丝棉T400骑兵斜',
      specs: '100% Polyester',
      image: "productimages/product-coolsilkcotton-1.jpg"
    },
    {
      id: 'sticky-hemp',
      name: lang === 'en' ? 'Sticky Hemp Cavalry Twill' : '粘麻骑兵斜',
      specs: '65% Rayon / 31% Nylon / 4% Linen',
      image: "/productimages/product-stickyhemp-1.jpg"
    },
    {
      id: 'dubai-crepe',
      name: lang === 'en' ? 'Imitation Acetic Acid Dubai Crepe' : '仿醋酸迪拜绉',
      specs: '100% Polyester',
      image: "productimages/product-dubaicrepe-1.jpg"
    },
    {
      id: 'small-bubbles',
      name: lang === 'en' ? 'Double-sided Small Bubbles' : '双面小泡泡',
      specs: '100% Polyester',
      image: "productimages/product-smallbubbles-1.jpg"
    }
  ];

  return (
    <section id="products" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-brand-deep/10 pb-12 relative">
          <div className="absolute top-0 left-0 w-12 h-[2px] bg-brand-secondary" />
          <h2 className="text-4xl md:text-5xl font-sans font-medium text-brand-heading uppercase tracking-tight">
            {t.products.title}
          </h2>
          <Link to="/products" className="text-[11px] font-medium uppercase tracking-[0.4em] text-brand-secondary hover:opacity-50 transition-opacity mt-8 md:mt-0">
            {t.products.viewAll} —
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
          {featuredProducts.map((product, idx) => (
            <motion.div 
              key={idx} 
              className="group"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Link to={`/products/${product.id}`} className="block cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden mb-10 bg-brand-light relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-deep/0 group-hover:bg-brand-deep/5 transition-colors duration-500" />
                </div>
                <h3 className="font-medium text-brand-heading mb-4 tracking-[0.2em] uppercase text-[13px] leading-tight group-hover:text-brand-secondary transition-colors">{product.name}</h3>
                <p className="text-[10px] text-brand-body font-medium uppercase tracking-[0.25em] opacity-60">{product.specs}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutUsPreview = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-0 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-stretch border-t border-brand-deep/10">
        <div className="relative h-[400px] md:h-auto overflow-hidden border-r border-brand-deep/10">
          <img 
            src="images/office-image2.jpg" 
            alt="Textile Production Facility" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-24">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-2 h-2 bg-brand-secondary/40" />
            <span className="text-[10px] font-medium text-brand-deep/60 tracking-[0.4em] uppercase">
              {t.nav.about}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium text-brand-heading mb-12 leading-tight tracking-tight">
            {t.about.title}
          </h2>
          <div className="space-y-8 max-w-xl border-l border-brand-deep/10 pl-8">
            <p className="text-brand-heading/90 text-base md:text-lg font-normal leading-relaxed">
              {t.about.desc1}
            </p>
            <p className="text-brand-body/70 text-sm md:text-base font-normal leading-relaxed">
              {t.about.desc2}
            </p>
          </div>
          <Link to="/about" className="mt-16 group flex flex-col items-start">
            <span className="text-[11px] font-medium uppercase tracking-[0.4em] mb-3 text-brand-deep">
              {t.about.cta}
            </span>
            <div className="w-32 h-[1px] bg-brand-deep/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-secondary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <main>
      <Hero />
      <KeyFeatures />
      <FeaturedProducts />
      <AboutUsPreview />
      <ContactCTA />
    </main>
  );
};

export default Home;
