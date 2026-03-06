import React from 'react';
import { ShoppingBag, Search, Menu, X, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isVault = location.pathname === '/vault';

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force dark text style for the new light hero
  const isSolid = scrolled || !isHome || isVault;
  const useDarkText = true; // Always use dark text for the light theme

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSolid ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center h-12">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex flex-col items-center group">
                <span className={`text-3xl font-display font-black tracking-tighter transition-colors leading-none ${useDarkText ? 'text-slate-900' : 'text-white'}`}>
                  SNEAKERS
                </span>
                <div className="flex items-center w-full">
                  <div className={`h-[1px] flex-1 ${useDarkText ? 'bg-slate-900/20' : 'bg-white/40'}`} />
                  <span className={`text-[10px] font-medium italic px-2 tracking-widest ${useDarkText ? 'text-slate-900/60' : 'text-white/80'}`}>
                    by l3nda
                  </span>
                  <div className={`h-[1px] flex-1 ${useDarkText ? 'bg-slate-900/20' : 'bg-white/40'}`} />
                </div>
              </Link>
            </div>
            
            <div className="hidden md:flex space-x-10 items-center">
              {[
                { name: t('nav.home'), path: '/' },
                { name: t('nav.sneakers'), path: '/sneakers' },
                { name: t('nav.vault'), path: '/vault' },
                { name: t('nav.contact'), path: '/contact' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors ${useDarkText ? 'text-slate-600 hover:text-brand' : 'text-white/80 hover:text-white'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 p-2 transition-colors ${useDarkText ? 'text-slate-600 hover:text-brand' : 'text-white/80 hover:text-white'}`}
              >
                <Globe size={18} />
                <span className="text-xs font-bold uppercase">{i18n.language}</span>
              </button>
              <button className={`p-2 transition-colors ${useDarkText ? 'text-slate-600 hover:text-brand' : 'text-white/80 hover:text-white'}`}>
                <Search size={20} />
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className={`p-2 transition-colors relative ${useDarkText ? 'text-slate-600 hover:text-brand' : 'text-white/80 hover:text-white'}`}
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 bg-brand text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <button 
                onClick={toggleLanguage}
                className={`p-2 transition-colors ${useDarkText ? 'text-slate-600' : 'text-white'}`}
              >
                <Globe size={20} />
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className={`p-2 transition-colors relative ${useDarkText ? 'text-slate-600 hover:text-brand' : 'text-white/80 hover:text-white'}`}
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-brand text-white text-[8px] font-bold flex items-center justify-center rounded-full border border-white">
                    {totalItems}
                  </span>
                )}
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className={`p-2 ${useDarkText ? 'text-slate-600' : 'text-white'}`}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-1"
          >
            {[
              { name: t('nav.home'), path: '/' },
              { name: t('nav.sneakers'), path: '/sneakers' },
              { name: t('nav.vault'), path: '/vault' },
              { name: t('nav.contact'), path: '/contact' }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-brand hover:bg-slate-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
