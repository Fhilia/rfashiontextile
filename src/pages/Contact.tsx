import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ContactHero = () => {
  const { t } = useLanguage();
  return (
    <section className="pt-32 pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-sans font-medium text-brand-deep mb-3 tracking-tighter uppercase leading-[0.9]">
            {t.contactPage.hero.title}
          </h1>
          <p className="text-lg text-brand-body max-w-xl leading-relaxed font-light mb-8 md:mb-12 lg:mb-16">
            {t.contactPage.hero.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ContactMain = () => {
  const { t } = useLanguage();
  return (
    <section className="pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-center py-12 lg:py-0"
          >
            <div className="relative z-10 p-1 bg-white border border-brand-deep/5 shadow-2xl shadow-brand-deep/5">
              <div className="bg-brand-light/20 p-10 flex flex-col items-center justify-center">
                <div className="relative group">
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-brand-deep/20" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-brand-deep/20" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-brand-deep/20" />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-brand-deep/20" />
                  
                  <div className="w-[180px] h-[180px] bg-white flex items-center justify-center relative overflow-hidden shadow-sm p-4">
                    <img 
                      src="/images/wechat-code.jpg" 
                      alt="WeChat QR Code" 
                      className="w-full h-full object-contain relative z-10"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                
                <div className="mt-8 flex items-center space-x-3 text-brand-deep/60">
                  <div className="w-8 h-[1px] bg-current" />
                  <span className="text-xs font-sans tracking-wide text-brand-deep/60">
                    {t.contactPage.wechat.prompt}
                  </span>
                  <div className="w-8 h-[1px] bg-current" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-10"
          >
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-brand-deep/70">
                <Phone size={18} strokeWidth={1.5} />
                <span className="text-xs font-mono tracking-widest uppercase">{t.contactPage.phone.title}</span>
              </div>
              
              <div className="relative group">
                <p className="text-sm font-sans text-brand-deep/60 mb-1 tracking-tight">
                  {t.contactPage.phone.contactPerson}
                </p>
                <p className="text-3xl md:text-4xl font-sans font-medium text-brand-deep tracking-tighter leading-none whitespace-nowrap">
                  {t.contactPage.phone.number}
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-8 border-t border-brand-deep/5">
              <div className="flex items-center space-x-3 text-brand-deep/70">
                <MapPin size={18} strokeWidth={1.5} />
                <span className="text-xs font-mono tracking-widest uppercase">{t.contactPage.address.title}</span>
              </div>
              
              <div className="space-y-2">
                {(t.contactPage.address.content as string[]).map((addr, idx) => (
                  <p key={idx} className="text-lg md:text-xl font-sans text-brand-deep/80 leading-snug max-w-md">
                    {addr}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />
      <ContactMain />
    </main>
  );
};

export default Contact;
