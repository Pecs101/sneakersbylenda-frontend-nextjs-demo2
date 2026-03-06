import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    alert(t('contact.alert_success'));
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/5 -skew-x-12 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black tracking-tighter mb-6 text-slate-900">
              {t('contact.title').split(' ')[0]} <span className="text-brand">{t('contact.title').split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Info Column */}
            <div className="lg:col-span-4 space-y-12">
              <div>
                <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-slate-900">{t('contact.info_title')}</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{t('contact.email_us')}</p>
                      <p className="text-slate-900 font-medium">support@l3nda.com</p>
                      <p className="text-slate-500 text-sm">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{t('contact.call_us')}</p>
                      <p className="text-slate-900 font-medium">+1 (555) 123-4567</p>
                      <p className="text-slate-500 text-sm">Mon-Fri, 9am - 6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{t('contact.visit_hq')}</p>
                      <p className="text-slate-900 font-medium">123 Sneaker Street, Culture District</p>
                      <p className="text-slate-500 text-sm">New York, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-950 rounded-[2rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Clock size={80} />
                </div>
                <h4 className="text-lg font-bold mb-4 flex items-center space-x-2">
                  <Clock size={18} className="text-brand" />
                  <span>{t('contact.business_hours')}</span>
                </h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex justify-between">
                    <span>{t('contact.days.mon_fri')}</span>
                    <span className="text-white">09:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t('contact.days.sat')}</span>
                    <span className="text-white">10:00 - 16:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t('contact.days.sun')}</span>
                    <span className="text-brand font-bold uppercase">{t('contact.days.closed')}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50"
              >
                <div className="flex items-center space-x-3 mb-8">
                  <MessageSquare className="text-brand" size={24} />
                  <h3 className="text-2xl font-display font-bold text-slate-900">{t('contact.send_message')}</h3>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">{t('contact.full_name')}</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all text-slate-900"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">{t('contact.email_address')}</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all text-slate-900"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">{t('contact.subject')}</label>
                    <input 
                      required
                      type="text" 
                      placeholder="How can we help?"
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all text-slate-900"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">{t('contact.message')}</label>
                    <textarea 
                      required
                      rows={6}
                      placeholder="Tell us more about your inquiry..."
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all text-slate-900 resize-none"
                    />
                  </div>

                  <div className="md:col-span-2 pt-4">
                    <button 
                      type="submit"
                      className="w-full md:w-auto px-12 py-5 bg-slate-950 text-white rounded-full font-bold hover:bg-brand transition-all flex items-center justify-center space-x-3 group"
                    >
                      <span>{t('contact.send_btn')}</span>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Global Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between border border-slate-100">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 text-brand mb-4">
                <Globe size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">{t('contact.global_presence')}</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">{t('contact.ship_worldwide')}</h2>
              <p className="text-slate-500 max-w-md">
                {t('contact.ship_worldwide_desc')}
              </p>
            </div>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-16 h-16 rounded-full border-4 border-white bg-slate-100 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    alt="Global user" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
              <div className="w-16 h-16 rounded-full border-4 border-white bg-brand flex items-center justify-center text-white text-xs font-bold">
                +10k
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
