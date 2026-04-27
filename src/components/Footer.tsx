import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-white pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-16 mb-40">
          <div>
            <Link to="/" className="text-2xl font-display font-medium tracking-tighter text-brand-deep mb-12 block">
              R-FASHION
            </Link>
            <p className="text-brand-body text-[11px] font-medium uppercase tracking-widest leading-relaxed mb-12 max-w-xs opacity-60">
              {t.footer.desc}
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-1.5 h-1.5 bg-brand-secondary" />
              <h4 className="font-medium text-brand-heading uppercase text-[10px] tracking-[0.4em] opacity-40">{t.footer.navTitle}</h4>
            </div>
            <ul className="space-y-6 text-[11px] font-medium uppercase tracking-widest text-brand-heading">
              <li><Link to="/" className="hover:text-brand-secondary transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/products" className="hover:text-brand-secondary transition-colors">{t.nav.products}</Link></li>
              <li><Link to="/about" className="hover:text-brand-secondary transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/contact" className="hover:text-brand-secondary transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-1.5 h-1.5 bg-brand-secondary" />
              <h4 className="font-medium text-brand-heading uppercase text-[10px] tracking-[0.4em] opacity-40">{t.footer.contactTitle}</h4>
            </div>
            <ul className="space-y-8 text-[11px] font-medium uppercase tracking-widest text-brand-heading">
              <li className="flex flex-col">
                <span className="text-[9px] opacity-40 mb-2 tracking-widest">PHONE</span>
                {t.contactPage.phone.number}
              </li>
              <li className="flex flex-col">
                <span className="text-[9px] opacity-40 mb-2 tracking-widest">LOCATION</span>
                <div className="space-y-2">
                  {(t.contactPage.address.content as string[]).map((addr, idx) => (
                    <p key={idx}>{addr}</p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-deep/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-medium uppercase tracking-[0.4em] text-brand-deep/60">
          <p>{t.footer.rights}</p>
          <div className="flex space-x-16">
            <a href="#" className="hover:text-brand-secondary transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-brand-secondary transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
