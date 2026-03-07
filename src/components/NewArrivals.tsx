import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Heart, ShoppingCart, Star, ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { PRODUCTS } from '../data/products';

export default function NewArrivals() {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const { openAuthModal } = useAuth();
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} id="shoe" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Parallax Background Text */}
      <motion.div 
        style={{ x }}
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap pointer-events-none select-none opacity-[0.03]"
      >
        <span className="text-[20vw] font-display font-black text-white tracking-tighter">
          {t('new_arrivals.title')} 2026
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-brand uppercase tracking-widest mb-2"
            >
              {t('new_arrivals.exclusive_collection')}
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-extrabold text-white"
            >
              {t('new_arrivals.title')}
            </motion.h3>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-white/10 text-white hover:bg-brand hover:border-brand transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-white/10 text-white hover:bg-brand hover:border-brand transition-all"
            >
              <ChevronRight size={24} />
            </button>
            <Link to="/sneakers" className="ml-4 text-white font-bold border-b-2 border-brand pb-1 hover:text-brand transition-colors whitespace-nowrap">
              {t('new_arrivals.view_all')}
            </Link>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-12 scrollbar-hide snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="min-w-[280px] md:min-w-[320px] lg:min-w-[350px] group snap-start"
            >
              <div className="relative aspect-square bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden mb-6 border border-white/10">
                <Link to={`/product/${product.id}`}>
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="absolute top-4 right-4 flex flex-col space-y-2 transition-transform duration-300">
                  <button 
                    onClick={openAuthModal}
                    className="p-3 bg-white text-slate-900 rounded-full shadow-lg hover:bg-brand hover:text-white transition-colors"
                  >
                    <Heart size={18} />
                  </button>
                  <button 
                    onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, img: product.img })}
                    className="p-3 bg-white text-slate-900 rounded-full shadow-lg hover:bg-brand hover:text-white transition-colors"
                  >
                    <ShoppingCart size={18} />
                  </button>
                  <button 
                    onClick={openAuthModal}
                    className="p-3 bg-slate-900 text-white rounded-full shadow-lg hover:bg-brand transition-colors flex items-center justify-center"
                  >
                    <Zap size={18} />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 border border-white/10">
                    <Star size={12} className="text-yellow-400 fill-yellow-400" />
                    <span>{product.rating}</span>
                  </span>
                </div>
              </div>
              <Link to={`/product/${product.id}`}>
                <h4 className="font-bold text-white text-lg mb-1 group-hover:text-brand transition-colors">{product.name}</h4>
              </Link>
              <p className="text-slate-400 font-medium">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
