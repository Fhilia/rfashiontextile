import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';

const Products = () => {
  const { lang, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return products;

    return products.filter((product) => {
      const name = product.name[lang].toLowerCase();
      const category = product.category[lang].toLowerCase();
      const composition = product.specs.composition.toLowerCase();
      
      return (
        name.includes(query) ||
        category.includes(query) ||
        composition.includes(query)
      );
    });
  }, [searchQuery, lang]);

  return (
    <main className="min-h-screen bg-white">
      <section className="pt-48 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-sans font-medium text-brand-deep mb-8 tracking-tighter uppercase leading-[0.9]">
              {t.productsPage.hero.title}
            </h1>
            <p className="text-xl text-brand-body max-w-xl leading-relaxed font-light">
              {t.productsPage.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-4 bg-white/95 backdrop-blur-sm sticky top-[60px] z-10 border-b border-brand-deep/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="relative group max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={18} className="text-brand-deep/60 group-focus-within:text-brand-deep transition-colors" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.productsPage.labels.searchPlaceholder}
              className="w-full bg-white border border-brand-deep/10 py-4 pl-12 pr-4 text-brand-deep placeholder:text-brand-deep/60 focus:outline-none focus:border-brand-deep focus:ring-1 focus:ring-brand-deep/10 transition-all font-sans"
            />
          </div>
        </div>
      </section>

      <section className="pt-12 pb-48 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link to={`/products/${product.id}`} className="group block">
                      <div className="relative aspect-[4/5] overflow-hidden bg-brand-light/20 mb-6">
                        <img
                          src={product.image}
                          alt={product.name[lang]}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-brand-deep/0 group-hover:bg-brand-deep/5 transition-colors duration-500" />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-xl font-sans font-medium text-brand-deep group-hover:text-brand-secondary transition-colors">
                          {product.name[lang]}
                        </h3>
                        <div className="pt-4 flex items-center space-x-2 text-brand-deep/60 group-hover:text-brand-secondary transition-colors">
                          <span className="text-[10px] font-mono tracking-widest uppercase">
                            {lang === "zh" ? "查看详情" : "View Details"}
                          </span>
                          <div className="w-8 h-[1px] bg-current transition-all duration-500 group-hover:w-12" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-24 flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 bg-brand-light/20 flex items-center justify-center mb-6">
                  <Search size={24} className="text-brand-deep/20" strokeWidth={1} />
                </div>
                <p className="text-brand-deep/70 font-sans tracking-wide">
                  {t.productsPage.labels.noResults}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default Products;
