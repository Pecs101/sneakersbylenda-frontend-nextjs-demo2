import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { EVENTS } from '../data/events';

export default function Events() {
  const { t } = useTranslation();
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-brand uppercase tracking-widest mb-3"
            >
              {t('events.upcoming')}
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 mb-6"
            >
              {t('events.title')}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-lg leading-relaxed"
            >
              {t('events.subtitle')}
            </motion.p>
          </div>
          <Link 
            to="/calendar"
            className="inline-block"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold hover:bg-brand transition-all shadow-xl shadow-slate-900/10"
            >
              {t('events.view_calendar')}
            </motion.button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {EVENTS.slice(0, 2).map((event, idx) => (
            <Link 
              key={event.id}
              to={`/event/${event.id}`}
              className="group relative h-[500px] rounded-[3rem] overflow-hidden block shadow-2xl shadow-slate-200"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="h-full w-full relative"
              >
                <motion.img 
                  style={{ y: idx % 2 === 0 ? y : useTransform(scrollYProgress, [0, 1], [50, -50]) }}
                  src={event.img} 
                  alt={event.title} 
                  className="absolute inset-0 w-full h-[120%] object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-12 text-white transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="flex items-center space-x-2 text-xs font-bold bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20 uppercase tracking-widest">
                      <Calendar size={14} className="text-brand" />
                      <span>{event.date}</span>
                    </span>
                    <span className="flex items-center space-x-2 text-xs font-bold bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20 uppercase tracking-widest">
                      <MapPin size={14} className="text-brand" />
                      <span>{event.location}</span>
                    </span>
                  </div>
                  <div className="flex items-end justify-between">
                    <h4 className="text-4xl font-display font-black tracking-tight leading-tight max-w-[70%]">{event.title}</h4>
                    <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center group-hover:rotate-45 transition-transform shadow-lg shadow-brand/30">
                      <ArrowUpRight size={32} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
