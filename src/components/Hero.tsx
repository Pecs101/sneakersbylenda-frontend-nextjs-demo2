import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export default function Hero() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const { addToCart } = useCart();

  const SLIDES = [
    {
      id: '1',
      brand: 'NIKE',
      title: t('hero.slide1.title'),
      subtitle: t('hero.slide1.subtitle'),
      img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200',
      color: '#FF3B30'
    },
    {
      id: '5',
      brand: 'JORDAN',
      title: t('hero.slide2.title'),
      subtitle: t('hero.slide2.subtitle'), 
      img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=60&w=964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: '#000000'
    },
    {
      id: '3',
      brand: 'NB',
      title: t('hero.slide3.title'),
      subtitle: t('hero.slide3.subtitle'),
      img: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: '#8E8E93'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, []);

  const activeSlide = SLIDES[currentSlide];
  const sneakersPreview = PRODUCTS.slice(0, 4);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#F2F4F7] shadow-[inset_0_0_200px_rgba(0,0,0,0.05)]">
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/[0.02] via-transparent to-slate-900/[0.02] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.04)_100%)] pointer-events-none" />

      {/* Background Text */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-text-${currentSlide}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <span className="text-[40vw] lg:text-[30vw] font-display font-black tracking-tighter text-slate-900 drop-shadow-[0_0_60px_rgba(0,0,0,0.05)]">
            {activeSlide.brand}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 h-full w-full flex items-center pt-16 pb-48 lg:pt-0 lg:pb-0">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-4 text-slate-900 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-[8rem] font-display font-black leading-[0.85] tracking-tighter mb-4 lg:mb-6 whitespace-pre-line">
                  {activeSlide.title}
                </h1>
                {/* <p className="text-slate-500 max-w-xs sm:max-w-sm mx-auto lg:mx-0 text-xs sm:text-sm md:text-base mb-6 lg:mb-8 leading-relaxed">
                  {activeSlide.subtitle}
                </p> */}
                <Link 
                  to={`/product/${activeSlide.id}`}
                  className="inline-flex items-center space-x-3 bg-slate-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-brand transition-all shadow-lg text-sm sm:text-base"
                >
                  <span>{t('nav.shop_now')}</span>
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center Image */}
          <div className="lg:col-span-6 relative flex justify-center items-center order-1 lg:order-2 py-4 lg:py-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${currentSlide}`}
                initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: -5 }}
                exit={{ opacity: 0, scale: 1.2, rotate: 5 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 0.8 
                }}
                className="relative w-full max-w-[220px] sm:max-w-md lg:max-w-2xl aspect-square flex items-center justify-center"
              >
                <img 
                  src={activeSlide.img} 
                  alt={activeSlide.brand} 
                  className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] lg:drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>

            {/* Circular Progress Indicator */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="60"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="2"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="60"
                    fill="none"
                    stroke="#FF3B30"
                    strokeWidth="2"
                    strokeDasharray="377"
                    initial={{ strokeDashoffset: 377 }}
                    animate={{ strokeDashoffset: 377 - (377 * (currentSlide + 1)) / SLIDES.length }}
                    transition={{ duration: 0.5 }}
                  />
                </svg>
                <div className="text-center">
                  <span className="block text-xl font-black text-slate-900">0{currentSlide + 1}</span>
                  <div className="w-8 h-px bg-slate-200 mx-auto my-1" />
                  <span className="block text-xs font-bold text-slate-400">0{SLIDES.length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Controls (Mobile) / Placeholder */}
          <div className="lg:col-span-2" />
        </div>
      </div>

      {/* Bottom Thumbnails */}
      <div className="absolute bottom-4 sm:bottom-8 lg:bottom-12 left-0 right-0 z-20">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex items-end justify-between">
            <div className="flex space-x-3 sm:space-x-4 overflow-x-auto pb-4 no-scrollbar mask-fade-right lg:mask-none w-full lg:w-auto">
              {sneakersPreview.map((shoe, idx) => (
                <motion.div
                  key={shoe.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="flex-shrink-0 w-48 sm:w-64 bg-white/80 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-20 sm:h-20 bg-slate-50 rounded-xl overflow-hidden flex-shrink-0">
                      <img 
                        src={shoe.img} 
                        alt={shoe.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        referrerPolicy="no-referrer" 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[9px] sm:text-xs font-bold text-slate-900 truncate mb-0.5 sm:mb-1 uppercase tracking-tight">{shoe.name}</h4>
                      <p className="text-xs sm:text-sm font-black text-slate-900 mb-0.5 sm:mb-1">{shoe.price}</p>
                      <p className="text-[7px] sm:text-[10px] font-bold text-slate-400 uppercase">3 {t('common.colours')}</p>
                    </div>
                    <button 
                      onClick={() => addToCart({ id: shoe.id, name: shoe.name, price: shoe.price, img: shoe.img })}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 hover:bg-brand hover:text-white transition-all"
                    >
                      <Plus size={12} className="sm:w-3.5 sm:h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="hidden lg:flex space-x-4 ml-8">
              <button 
                onClick={prevSlide}
                className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute top-1/4 right-12 opacity-10 pointer-events-none">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
          ))}
        </div>
      </div>
      <div className="absolute bottom-1/4 left-12 opacity-10 pointer-events-none">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
