import React from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Lightbulb,
  CheckCircle,
  Heart,
  Award,
  Zap
} from 'lucide-react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';
import { useLanguage } from '../context/LanguageContext';
import ContactCTA from '../components/ContactCTA';

// URL for the world atlas topojson
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const AboutHero = () => {
  const { t } = useLanguage();
  return (
    <section className="pt-32 pb-4 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-[11px] font-medium text-brand-secondary tracking-[0.5em] uppercase mb-4 block">
            {t.aboutPage.hero.label}
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-medium text-brand-deep leading-tight tracking-tight">
            {t.aboutPage.hero.title}
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

const CompanyIntro = () => {
  const { t } = useLanguage();
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/2] md:aspect-[4/3] overflow-hidden shadow-2xl z-10 group">
              <img
                src="/images/office-image.jpg"
                alt="Premium Textile Fabric Rolls"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/20 to-transparent opacity-40" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-brand-deep/10 -z-0" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-light -z-0" />
            <div className="absolute top-1/2 -translate-y-1/2 -left-8 w-16 h-[1px] bg-brand-secondary/30 hidden lg:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-sans font-medium text-brand-heading mb-4 md:mb-6 tracking-tight">
              {t.aboutPage.intro.title}
            </h2>
            <div className="space-y-4 text-brand-body leading-relaxed text-base md:text-lg max-w-xl">
              <p>{t.aboutPage.intro.content1}</p>
              <p>{t.aboutPage.intro.content2}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CoreStrengths = () => {
  const { t } = useLanguage();
  const strengths = [
    {
      icon: <MapPin size={32} strokeWidth={1} className="text-brand-secondary" />,
      title: t.aboutPage.strengths.items[0].title,
      desc: t.aboutPage.strengths.items[0].desc
    },
    {
      icon: <Lightbulb size={32} strokeWidth={1} className="text-brand-secondary" />,
      title: t.aboutPage.strengths.items[1].title,
      desc: t.aboutPage.strengths.items[1].desc
    },
    {
      icon: <CheckCircle size={32} strokeWidth={1} className="text-brand-secondary" />,
      title: t.aboutPage.strengths.items[2].title,
      desc: t.aboutPage.strengths.items[2].desc
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-sans font-medium text-brand-heading mb-16 text-center tracking-tight">
          {t.aboutPage.strengths.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {strengths.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-12 shadow-sm border border-brand-deep/5"
            >
              <div className="mb-8">{item.icon}</div>
              <h3 className="text-xl font-medium text-brand-heading mb-6 tracking-tight">{item.title}</h3>
              <p className="text-sm text-brand-body leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FacilityCarousel = ({ title, subtitle, images, variant = "default" }: { title: string, subtitle: string, images: string[], variant?: "default" | "alternate" }) => {
  const [isPaused, setIsPaused] = React.useState(false);

  // Duplicate images for infinite loop effect
  const displayImages = [...images, ...images];
  const bgClass = variant === "alternate" ? "bg-[#f8faff]" : "bg-white";

  return (
    <section className={`py-24 md:py-32 ${bgClass} ${variant === "alternate" ? "border-y border-brand-deep/5" : ""} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-12 relative"
        >
          {/* Subtle accent line */}
          <div className="absolute top-0 left-0 w-8 h-[2px] bg-brand-secondary/30 -translate-y-4" />

          <h2 className="text-2xl md:text-3xl font-sans font-medium text-brand-heading mb-3 tracking-tight uppercase">
            {title}
          </h2>
          <p className="text-brand-body text-sm md:text-base opacity-60 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <div className="relative overflow-hidden group">
          <motion.div
            className="flex gap-4 md:gap-8"
            animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 40,
                ease: "linear"
              }
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ width: "fit-content" }}
          >
            {displayImages.map((src, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[280px] md:w-[420px] aspect-[4/3] rounded-none overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-deep/5 bg-white relative group/item"
              >
                <img
                  src={src}
                  alt={`${title} facility ${idx + 1}`}
                  className="w-full h-full object-cover grayscale-[0.3] group-hover/item:grayscale-0 transition-all duration-1000 ease-out group-hover/item:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle inner border overlay */}
                <div className="absolute inset-0 border border-white/10 pointer-events-none" />
              </div>
            ))}
          </motion.div>

          {/* Refined Fade Edges matching the section background */}
          <div className={`absolute inset-y-0 left-0 w-24 bg-gradient-to-r ${variant === "alternate" ? "from-[#f8faff]" : "from-white"} to-transparent z-10 pointer-events-none`} />
          <div className={`absolute inset-y-0 right-0 w-24 bg-gradient-to-l ${variant === "alternate" ? "from-[#f8faff]" : "from-white"} to-transparent z-10 pointer-events-none`} />
        </div>
      </div>
    </section>
  );
};

const Facilities = () => {
  const { t } = useLanguage();

  const warehouseImages = [
    '/images/warehouse1.jpg',
    '/images/warehouse2.jpg',
    '/images/warehouse3.jpg',
    '/images/warehouse4.jpg',
    '/images/warehouse5.jpg',
    '/images/warehouse6.jpg'
  ];

  const factoryImages = [
    '/images/factory1.jpg',
    '/images/factory2.jpg',
    '/images/factory3.jpg',
    '/images/factory4.jpg',
    '/images/factory5.jpg',
    '/images/factory6.jpg',
    '/images/factory7.jpg',
  ];

  return (
    <>
      <FacilityCarousel
        title={t.aboutPage.warehouse.title}
        subtitle={t.aboutPage.warehouse.subtitle}
        images={warehouseImages}
        variant="alternate"
      />
      <FacilityCarousel
        title={t.aboutPage.factory.title}
        subtitle={t.aboutPage.factory.subtitle}
        images={factoryImages}
      />
    </>
  );
};

const GlobalReach = () => {
  const { t } = useLanguage();

  // Highlighted countries names in topojson (Approximate matching for world-atlas)
  const highlightedNames = [
    "Indonesia", "United Arab Emirates", "India", "Bangladesh",
    "Saudi Arabia", "Egypt", "Morocco", "Brazil", "China"
  ];

  // Marker coordinates for subtle glowing effect
  const markers = [
    { name: "Indonesia", coordinates: [106.8456, -6.2088] as [number, number] },
    { name: "UAE", coordinates: [54.3773, 24.4539] as [number, number] },
    { name: "India", coordinates: [77.2090, 28.6139] as [number, number] },
    { name: "Bangladesh", coordinates: [90.4125, 23.8103] as [number, number] },
    { name: "Saudi Arabia", coordinates: [46.6753, 24.7136] as [number, number] },
    { name: "Egypt", coordinates: [31.2357, 30.0444] as [number, number] },
    { name: "Morocco", coordinates: [-6.8498, 34.0209] as [number, number] },
    { name: "Brazil", coordinates: [-47.9292, -15.7801] as [number, number] },
    { name: "China", coordinates: [120.5855, 30.0071] as [number, number], isBase: true },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#f8faff] border-y border-brand-deep/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1a2e35_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-3"
        >
          <span className="text-[11px] font-medium text-brand-secondary tracking-[0.4em] uppercase mb-4 block">
            {t.aboutPage.globalReach.title}
          </span>
          <h2 className="text-2xl md:text-4xl font-sans font-medium text-brand-heading mb-4 tracking-tight">
            {t.aboutPage.globalReach.mainTitle}
          </h2>
          <p className="text-brand-body text-base max-w-2xl mx-auto opacity-70 leading-relaxed">
            {t.aboutPage.globalReach.subtitle}
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full mt-0 mb-10 flex items-center justify-center overflow-hidden"
        >
          <div className="w-full max-w-4xl opacity-90 transition-all duration-700 hover:opacity-100">
            <ComposableMap
              projectionConfig={{
                scale: 160,
                center: [20, 15]
              }}
              className="w-full h-auto"
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const isHighlighted = highlightedNames.includes(geo.properties.name);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isHighlighted ? "#1a2e35" : "#f1f2f4"} // Brand Deep for highlighted, Light Gray for others
                        stroke="#ffffff"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none", fill: isHighlighted ? "#1a2e35" : "#e5e7eb" },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {markers.map(({ name, coordinates, isBase }) => (
                <Marker key={name} coordinates={coordinates}>
                  {isBase ? (
                    <g>
                      <motion.circle
                        r={6}
                        fill="#be9f63"
                        initial={{ r: 4, opacity: 0.8 }}
                        animate={{ r: [4, 10, 4], opacity: [0.8, 0, 0.8] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          ease: "easeInOut",
                        }}
                      />
                      <circle r={4} fill="#be9f63" />
                      <text
                        textAnchor="start"
                        x={12}
                        y={4}
                        className="text-[8px] font-medium fill-brand-heading uppercase tracking-widest pointer-events-none"
                      >
                        {t.aboutPage.globalReach.hqLabel}
                      </text>
                    </g>
                  ) : (
                    <g>
                      <motion.circle
                        r={3}
                        fill="#be9f63" // Brand Secondary
                        initial={{ r: 2, opacity: 0.5 }}
                        animate={{ r: [2, 5, 2], opacity: [0.5, 0, 0.5] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2.5,
                          ease: "easeInOut",
                        }}
                      />
                      <circle r={2} fill="#be9f63" />
                    </g>
                  )}
                </Marker>
              ))}
            </ComposableMap>
          </div>
        </motion.div>

        {/* Country Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto flex flex-wrap justify-center gap-y-4 gap-x-4 text-brand-body text-[10px] filter grayscale opacity-60 font-medium tracking-[0.3em] uppercase"
        >
          {t.aboutPage.globalReach.countries.map((country: string, idx: number) => (
            <React.Fragment key={country}>
              <span className="hover:text-brand-secondary transition-colors cursor-default whitespace-nowrap">
                {country}
              </span>
              {idx < t.aboutPage.globalReach.countries.length - 1 && (
                <span className="opacity-20 select-none mx-1">·</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <main>
      <AboutHero />
      <CompanyIntro />
      <Facilities />
      <GlobalReach />
      <CoreStrengths />
      <ContactCTA />
    </main>
  );
};

export default AboutUs;
