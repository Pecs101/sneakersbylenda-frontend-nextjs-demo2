import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, X, ChevronDown, Search, ShoppingBag, Heart, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PRODUCTS, Product } from '../data/products';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const CATEGORIES = ['All', 'Lifestyle', 'Running', 'Basketball', 'Skateboarding'];
const BRANDS = ['All', 'Nike', 'Adidas', 'New Balance', 'Vans', 'Jordan', 'Converse'];

export default function SneakersPage() {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const { openAuthModal } = useAuth();

  const PRICE_RANGES = [
    { label: t('price_ranges.all'), min: 0, max: 1000, id: 'all' },
    { label: t('price_ranges.under_100'), min: 0, max: 100, id: 'under_100' },
    { label: t('price_ranges.range_100_150'), min: 100, max: 150, id: '100_150' },
    { label: t('price_ranges.range_150_200'), min: 150, max: 200, id: '150_200' },
    { label: t('price_ranges.over_200'), min: 200, max: 1000, id: 'over_200' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedPriceRangeId, setSelectedPriceRangeId] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState(t('sneakers_page.sort_options.newest'));
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

  const selectedPriceRange = PRICE_RANGES.find(r => r.id === selectedPriceRangeId) || PRICE_RANGES[0];

  const categoryTranslationMap: Record<string, string> = {
    'All': t('categories.all'),
    'Lifestyle': t('categories.lifestyle'),
    'Running': t('categories.running'),
    'Basketball': t('categories.basketball'),
    'Skateboarding': t('categories.skateboarding')
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
      const matchesPrice = product.numericPrice >= selectedPriceRange.min && product.numericPrice <= selectedPriceRange.max;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesBrand && matchesPrice && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === t('sneakers_page.sort_options.low_high')) return a.numericPrice - b.numericPrice;
      if (sortBy === t('sneakers_page.sort_options.high_low')) return b.numericPrice - a.numericPrice;
      return 0; // Default newest (no change)
    });
  }, [selectedCategory, selectedBrand, selectedPriceRange, searchQuery, sortBy, t]);

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900">{t('sneakers_page.title')}</h1>
            <p className="text-slate-500 mt-1">{filteredProducts.length} {t('sneakers_page.products_found')}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder={t('sneakers_page.search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
              />
            </div>
            <button 
              onClick={() => setIsFilterSidebarOpen(true)}
              className="md:hidden flex items-center justify-center space-x-2 bg-slate-900 text-white w-full sm:w-auto px-6 py-3 rounded-full font-bold shadow-lg shadow-slate-900/20"
            >
              <Filter size={18} />
              <span>{t('sneakers_page.filters')}</span>
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0 space-y-8">
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">{t('sneakers_page.category')}</h3>
              <div className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === cat ? 'bg-brand text-white font-bold' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {categoryTranslationMap[cat]}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">{t('sneakers_page.brand')}</h3>
              <div className="space-y-2">
                {BRANDS.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedBrand === brand ? 'bg-brand text-white font-bold' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">{t('sneakers_page.price_range')}</h3>
              <div className="space-y-2">
                {PRICE_RANGES.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setSelectedPriceRangeId(range.id)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedPriceRangeId === range.id ? 'bg-brand text-white font-bold' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">{t('sneakers_page.sort_by')}</h3>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none"
              >
                <option>{t('sneakers_page.sort_options.newest')}</option>
                <option>{t('sneakers_page.sort_options.low_high')}</option>
                <option>{t('sneakers_page.sort_options.high_low')}</option>
              </select>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="py-24 text-center">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={32} className="text-slate-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{t('sneakers_page.no_sneakers_found')}</h3>
                <p className="text-slate-500 mt-2">{t('sneakers_page.no_sneakers_desc')}</p>
                <button 
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedBrand('All');
                    setSelectedPriceRangeId('all');
                    setSearchQuery('');
                  }}
                  className="mt-6 text-brand font-bold hover:underline"
                >
                  {t('sneakers_page.clear_filters')}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="group"
                  >
                    <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-slate-50 mb-4">
                      <Link to={`/product/${product.id}`}>
                        <img 
                          src={product.img} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
                          onClick={() => addToCart({
                            id: parseInt(product.id),
                            name: product.name,
                            price: product.price,
                            img: product.img,
                            quantity: 1
                          })}
                          className="p-3 bg-white text-slate-900 rounded-full shadow-lg hover:bg-brand hover:text-white transition-colors"
                        >
                          <ShoppingBag size={18} />
                        </button>
                        <button 
                          onClick={openAuthModal}
                          className="p-3 bg-slate-900 text-white rounded-full shadow-lg hover:bg-brand transition-colors flex items-center justify-center"
                        >
                          <Zap size={18} />
                        </button>
                      </div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        {product.brand}
                      </div>
                    </div>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-brand transition-colors">{product.name}</h3>
                    </Link>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-slate-500 text-sm">{categoryTranslationMap[product.category]}</p>
                      <p className="font-bold text-slate-900">{product.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Sidebar */}
      <AnimatePresence>
        {isFilterSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80]"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-full max-w-xs bg-white z-[90] p-8 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-display font-bold">{t('sneakers_page.filters')}</h2>
                <button onClick={() => setIsFilterSidebarOpen(false)} className="p-2 hover:bg-slate-100 rounded-full">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">{t('sneakers_page.category')}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          selectedCategory === cat ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'bg-slate-50 text-slate-600'
                        }`}
                      >
                        {categoryTranslationMap[cat]}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">{t('sneakers_page.brand')}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {BRANDS.map((brand) => (
                      <button
                        key={brand}
                        onClick={() => setSelectedBrand(brand)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          selectedBrand === brand ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'bg-slate-50 text-slate-600'
                        }`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">{t('sneakers_page.price_range')}</h3>
                  <div className="space-y-2">
                    {PRICE_RANGES.map((range) => (
                      <button
                        key={range.id}
                        onClick={() => setSelectedPriceRangeId(range.id)}
                        className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          selectedPriceRangeId === range.id ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'bg-slate-50 text-slate-600'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => setIsFilterSidebarOpen(false)}
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold mt-8"
                >
                  {t('sneakers_page.apply_filters')}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
