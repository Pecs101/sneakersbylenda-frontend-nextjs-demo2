import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Star, Package, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { COMBOS } from '../data/combos';
import { useCart } from '../context/CartContext';

export default function Vault() {
  const { t } = useTranslation();
  const { addToCart } = useCart();

  return (
    <div className="pt-24 min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand/10 blur-[120px] rounded-full" />
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-96 h-96 border border-white/5 rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-8"
          >
            <ShieldCheck size={16} className="text-brand" />
            <span className="text-xs font-bold tracking-widest uppercase">{t('vault.access_granted')}</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-8xl font-display font-black mb-6 tracking-tighter"
          >
            {t('vault.title').split(' ')[0]} <span className="text-brand">{t('vault.title').split(' ').slice(1).join(' ')}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-12"
          >
            {t('vault.subtitle')}
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: t('vault.features.curated_sets'), icon: Package },
              { label: t('vault.features.exclusive_savings'), icon: Zap },
              { label: t('vault.features.limited_drops'), icon: Star },
              { label: t('vault.features.priority_shipping'), icon: ShieldCheck },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
              >
                <feature.icon size={20} className="mx-auto mb-2 text-brand" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">{feature.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Combos Grid */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {COMBOS.map((combo, idx) => (
              <motion.div
                key={combo.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-brand/50 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image Side */}
                  <div className="md:w-1/2 relative overflow-hidden">
                    <img 
                      src={combo.img} 
                      alt={combo.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent md:bg-gradient-to-r" />
                    
                    {combo.tag && (
                      <div className="absolute top-6 left-6">
                        <span className="bg-brand text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-xl">
                          {combo.tag}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Side */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={i < Math.floor(combo.rating) ? "text-brand fill-brand" : "text-slate-700"} 
                          />
                        ))}
                        <span className="text-xs text-slate-500 ml-2">({combo.reviews})</span>
                      </div>
                      
                      <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-brand transition-colors">
                        {combo.name}
                      </h3>
                      
                      <p className="text-slate-400 text-sm mb-8 line-clamp-2">
                        {combo.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t('vault.whats_inside')}</p>
                        {combo.items.map((item, i) => (
                          <div key={i} className="flex items-center space-x-3 text-sm text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                            <span>{item.name}</span>
                            <span className="text-[10px] text-slate-600 uppercase">({item.type})</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <div className="flex items-end justify-between mb-6">
                        <div>
                          <p className="text-slate-500 text-xs line-through mb-1">{combo.originalPrice}</p>
                          <p className="text-3xl font-bold text-white tracking-tight">{combo.price}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-bold text-brand uppercase tracking-widest mb-1">{t('vault.bundle_deal')}</p>
                          <p className="text-xs text-slate-500">{t('vault.free_shipping')}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => addToCart({ id: combo.id, name: combo.name, price: combo.price, img: combo.img })}
                        className="w-full flex items-center justify-center space-x-3 bg-white text-slate-950 py-4 rounded-xl font-black hover:bg-brand hover:text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                      >
                        <ShoppingCart size={20} />
                        <span className="tracking-widest text-sm uppercase">{t('vault.add_to_cart')}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-4 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-black text-slate-950 mb-8 tracking-tighter">
            {t('vault.cta_title')}
          </h2>
          <p className="text-slate-900/70 text-lg mb-12 font-medium">
            {t('vault.cta_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input 
              type="email" 
              placeholder={t('vault.cta_placeholder')}
              className="w-full sm:w-80 px-6 py-4 rounded-full bg-white/20 border border-white/30 text-slate-950 placeholder:text-slate-900/50 focus:outline-none focus:ring-2 focus:ring-slate-950"
            />
            <button className="w-full sm:w-auto px-10 py-4 bg-slate-950 text-white rounded-full font-bold hover:bg-slate-900 transition-all flex items-center justify-center space-x-2">
              <span>{t('vault.cta_btn')}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
