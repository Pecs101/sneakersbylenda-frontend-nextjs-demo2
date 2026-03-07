import { Instagram, Twitter, Facebook, Youtube, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start mb-6">
              <span className="text-3xl font-display font-black tracking-tighter text-brand leading-none">SNEAKERS</span>
              <div className="flex items-center w-full max-w-[160px] mt-1">
                <div className="h-[1px] flex-1 bg-brand/40" />
                <span className="text-[10px] font-medium italic px-2 tracking-widest text-white/80">by l3nda</span>
                <div className="h-[1px] flex-1 bg-brand/40" />
              </div>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.quick_links')}</h4>
            <ul className="space-y-4 text-slate-400">
              {['New Arrivals', 'Best Sellers'].map((item) => (
                <li key={item}><a href="#" className="hover:text-brand transition-colors">{item}</a></li>
              ))}
              <li><Link to="/calendar" className="hover:text-brand transition-colors">Release Calendar</Link></li>
              {['Store Locator', 'Authenticity'].map((item) => (
                <li key={item}><a href="#" className="hover:text-brand transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.support')}</h4>
            <ul className="space-y-4 text-slate-400">
              {['Order Status', 'Shipping & Delivery', 'Returns', 'Payment Options'].map((item) => (
                <li key={item}><a href="#" className="hover:text-brand transition-colors">{item}</a></li>
              ))}
              <li><Link to="/contact" className="hover:text-brand transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.newsletter')}</h4>
            <p className="text-slate-400 mb-6">{t('footer.newsletter_desc')}</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder={t('footer.email_placeholder')} 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 focus:outline-none focus:border-brand transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand text-white px-6 rounded-full hover:bg-brand/90 transition-all flex items-center">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
{/* Payment Methods Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 py-8 border-t border-white/10">
          <span className="text-white text-sm font-bold uppercase tracking-widest">Metodo de Pagamento</span> 
          <div className="flex flex-wrap justify-center gap-6">
            <img 
              src="/src/img/vinti4.webp" 
              alt="vinti4" 
              className="h-6 md:h-8 w-auto grayscale hover:grayscale-0 transition-all"
            />
            <img 
              src="/src/img/visa-secure_blu_2021_dkbg.webp" 
              alt="Visa Secure" 
              className="h-6 md:h-8 w-auto grayscale hover:grayscale-0 transition-all"
            />
            <img 
              src="/src/img/mc_idcheck_hrz_rgb_rev.webp" 
              alt="Mastercard ID Check" 
              className="h-6 md:h-8 w-auto grayscale hover:grayscale-0 transition-all"
            />
            <img 
              src="/src/img/amex_SK_logo_full.webp" 
              alt="American Express SafeKey" 
              className="h-6 md:h-8 w-auto grayscale hover:grayscale-0 transition-all"
            /> 
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© 2026 SNEAKERS by l3nda. {t('footer.rights')}</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
