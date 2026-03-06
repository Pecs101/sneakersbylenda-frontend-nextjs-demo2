import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ShoppingCart, ArrowRight, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { TSHIRTS } from '../data/tshirts';

export default function TShirts() {
  const { addToCart } = useCart();
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Parallax Element */}
      <motion.div 
        style={{ y }}
        className="absolute right-0 top-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-brand uppercase tracking-widest mb-2"
            >
              Apparel
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 mb-6"
            >
              SIGNATURE TEES
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-lg"
            >
              Elevate your fit with our premium organic cotton tees. Designed for the perfect boxy fit to complement your kicks.
            </motion.p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-slate-200 text-slate-900 hover:bg-brand hover:text-white hover:border-brand transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-slate-200 text-slate-900 hover:bg-brand hover:text-white hover:border-brand transition-all"
            >
              <ChevronRight size={24} />
            </button>
            <button className="group flex items-center space-x-2 text-slate-900 font-bold hover:text-brand transition-colors text-lg ml-4 whitespace-nowrap">
              <span>SHOP ALL</span>
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-12 scrollbar-hide snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TSHIRTS.map((tshirt, idx) => (
            <motion.div
              key={tshirt.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              className="min-w-[280px] md:min-w-[320px] lg:min-w-[350px] group snap-start"
            >
              <div className="relative aspect-[4/5] bg-slate-50 rounded-[2rem] overflow-hidden mb-6 border border-slate-100 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <Link to={`/apparel/${tshirt.id}`}>
                  <img 
                    src={tshirt.img} 
                    alt={tshirt.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="absolute top-6 right-6 flex flex-col space-y-3 translate-x-16 group-hover:translate-x-0 transition-transform duration-500">
                  <button className="p-4 bg-white rounded-full shadow-lg hover:bg-brand hover:text-white transition-colors">
                    <Heart size={20} />
                  </button>
                  <button 
                    onClick={() => addToCart({ id: tshirt.id, name: tshirt.name, price: tshirt.price, img: tshirt.img })}
                    className="p-4 bg-white rounded-full shadow-lg hover:bg-brand hover:text-white transition-colors"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
                <div className="absolute bottom-6 left-6">
                  <div className="flex -space-x-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-white/50">
                    {tshirt.colors.slice(0, 3).map((color, i) => (
                      <div 
                        key={i} 
                        className="w-3.5 h-3.5 rounded-full border-2 border-white ring-1 ring-slate-200"
                        style={{ backgroundColor: color.toLowerCase().includes('white') ? '#fff' : color.toLowerCase().includes('black') ? '#000' : color.toLowerCase().includes('slate') ? '#64748b' : color.toLowerCase().includes('olive') ? '#3f6212' : color.toLowerCase().includes('cream') ? '#f5f5dc' : color.toLowerCase().includes('sand') ? '#c2b280' : color.toLowerCase().includes('charcoal') ? '#36454f' : '#cbd5e1' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <Link to={`/apparel/${tshirt.id}`}>
                <h4 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-brand transition-colors">{tshirt.name}</h4>
              </Link>
              <p className="text-slate-500 font-medium">{tshirt.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
