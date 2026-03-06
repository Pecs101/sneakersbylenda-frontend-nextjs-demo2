import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t } = useTranslation();
  const containerRef = React.useRef(null);

  const TESTIMONIALS = [
    {
      id: 1,
      name: 'Marcus Rodriguez',
      role: t('testimonials.items.marcus.role'),
      content: t('testimonials.items.marcus.content'),
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    },
    {
      id: 2,
      name: 'Sarah Jenkins',
      role: t('testimonials.items.sarah.role'),
      content: t('testimonials.items.sarah.content'),
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    {
      id: 3,
      name: 'David Chen',
      role: t('testimonials.items.david.role'),
      content: t('testimonials.items.david.content'),
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    }
  ];
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="py-24 bg-slate-900 overflow-hidden relative">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute left-10 top-20 text-[15vw] font-display font-black text-white/5 pointer-events-none select-none"
      >
        {t('testimonials.trust')}
      </motion.div>
      <motion.div 
        style={{ y: y2 }}
        className="absolute right-10 bottom-20 text-[15vw] font-display font-black text-white/5 pointer-events-none select-none"
      >
        {t('testimonials.voice')}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand uppercase tracking-widest mb-2"
          >
            {t('testimonials.community')}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-extrabold text-white"
          >
            {t('testimonials.title')}
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 relative group hover:bg-white/10 transition-all duration-500"
            >
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-brand rounded-3xl flex items-center justify-center text-white rotate-12 shadow-2xl group-hover:rotate-0 transition-transform duration-500">
                <Quote size={32} />
              </div>
              <p className="text-slate-300 text-lg mb-10 italic leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center space-x-5">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-white/20 relative z-10" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl leading-none">{t.name}</h4>
                  <p className="text-sm text-slate-400 mt-2 font-medium uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
