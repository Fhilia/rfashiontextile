import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { lang, t } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-8">
          <h1 className="text-4xl font-sans font-medium text-brand-deep">Product Not Found</h1>
          <Link to="/products" className="text-brand-secondary hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const allImages = product.images || [product.image];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const specs = [
    { label: t.productsPage.labels.status, value: product.status === 'ready' ? t.productsPage.labels.ready : t.productsPage.labels.preorder },
    { label: t.productsPage.labels.width, value: product.specs.width },
    { label: t.productsPage.labels.gsm, value: product.specs.gsm },
    { label: t.productsPage.labels.composition, value: product.specs.composition },
    { label: t.productsPage.labels.weftDensity, value: product.specs.weftDensity },
    { label: t.productsPage.labels.specification, value: product.specs.specification },
    { label: t.productsPage.labels.pattern, value: product.specs.pattern?.[lang] },
    { label: t.productsPage.labels.application, value: product.specs.application[lang] },
    { label: t.productsPage.labels.customization, value: product.specs.customization?.[lang] },
  ].filter(spec => spec.value);

  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link 
            to="/products" 
            className="group inline-flex items-center space-x-4 text-brand-deep/70 hover:text-brand-secondary transition-colors"
          >
            <div className="w-10 h-10 flex items-center justify-center border border-brand-deep/10 transition-colors group-hover:border-brand-secondary/20">
              <ArrowLeft size={16} strokeWidth={1.5} />
            </div>
            <span className="text-xs font-mono tracking-widest uppercase">{t.productsPage.labels.back}</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] lg:aspect-square overflow-hidden bg-brand-light/20 group"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImageIndex}
                  src={allImages[activeImageIndex]}
                  alt={product.name[lang]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              {allImages.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm text-brand-deep opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm text-brand-deep opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
              <div className="absolute inset-0 border border-brand-deep/5 pointer-events-none" />
            </motion.div>

            {allImages.length > 1 && (
              <div className="grid grid-cols-5 gap-4">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-square overflow-hidden border transition-all duration-300 ${
                      activeImageIndex === idx ? 'border-brand-secondary' : 'border-transparent hover:border-brand-deep/20'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name[lang]} thumbnail ${idx + 1}`}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${
                        activeImageIndex === idx ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                      }`}
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="space-y-2 lg:space-y-3">
              {product.itemCode && (
                <span className="text-[10px] font-mono tracking-widest text-brand-deep/50 uppercase block mb-1">
                  Item: {product.itemCode}
                </span>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-brand-deep tracking-tighter uppercase leading-[0.9]">
                {product.name[lang]}
              </h1>
            </div>

            <div className="space-y-6 pt-6 border-t border-brand-deep/5">
              <h2 className="text-xs font-mono tracking-[0.4em] text-brand-deep/60 uppercase">{t.productsPage.labels.technicalSpecs}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 lg:gap-y-6">
                {specs.map((spec, index) => (
                  <div key={index} className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-brand-deep/70 uppercase block">
                      {spec.label}
                    </span>
                    <p className="text-base lg:text-lg font-sans text-brand-deep font-medium">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 lg:pt-8">
              <Link 
                to="/contact" 
                className="inline-flex items-center group"
              >
                <div className="px-10 py-5 bg-brand-deep text-white text-xs font-medium uppercase tracking-[0.3em] transition-all duration-500 hover:bg-brand-secondary">
                  {t.productsPage.labels.inquireNow}
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
