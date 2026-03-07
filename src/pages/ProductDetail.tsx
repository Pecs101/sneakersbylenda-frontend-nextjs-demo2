import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Heart, ShoppingCart, ArrowLeft, Plus, Minus, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { PRODUCTS } from '../data/products';

export default function ProductDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { addToCart } = useCart();
  const { openAuthModal } = useAuth();
  const [quantity, setQuantity] = React.useState(1);
  const [selectedSize, setSelectedSize] = React.useState<string | null>(null);

  const product = PRODUCTS.find(p => p.id === id);
  const similarItems = PRODUCTS.filter(p => p.id !== id).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{t('product_detail.not_found')}</h2>
          <Link to="/" className="text-brand font-bold hover:underline">{t('product_detail.back_to_home')}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center space-x-2 text-slate-500 hover:text-brand transition-colors mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">{t('product_detail.back_to_shop')}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-square bg-slate-50 rounded-[2rem] sm:rounded-[3rem] overflow-hidden"
          >
            <img 
              src={product.img} 
              alt={product.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <button 
              onClick={openAuthModal}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 p-3 sm:p-4 bg-white rounded-full shadow-lg hover:bg-brand hover:text-white transition-colors"
            >
              <Heart size={20} className="sm:w-6 sm:h-6" />
            </button>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col"
          >
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-900">{product.rating}</span>
                <span className="text-sm text-slate-400">({product.reviews} {t('product_detail.reviews')})</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 mb-4 tracking-tight">{product.name}</h1>
              <p className="text-2xl sm:text-3xl font-display font-bold text-brand">{product.price}</p>
            </div>

            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-900">{t('product_detail.select_size')}</h3>
                <button className="text-sm text-slate-400 hover:text-brand transition-colors">{t('product_detail.size_guide')}</button>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
                {['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-xl font-bold text-xs sm:text-sm transition-all border ${
                      selectedSize === size 
                        ? 'bg-slate-900 text-white border-slate-900' 
                        : 'bg-white text-slate-600 border-slate-200 hover:border-brand'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <div className="flex items-center border border-slate-200 rounded-2xl px-4 py-4">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-1 hover:text-brand transition-colors">
                  <Minus size={20} />
                </button>
                <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="p-1 hover:text-brand transition-colors">
                  <Plus size={20} />
                </button>
              </div>
              <button 
                onClick={() => {
                  for(let i = 0; i < quantity; i++) {
                    addToCart({ id: product.id, name: product.name, price: product.price, img: product.img });
                  }
                }}
                className="flex-1 bg-brand text-white py-4 rounded-2xl font-bold text-lg hover:bg-brand/90 transition-all shadow-xl shadow-brand/20 flex items-center justify-center space-x-3"
              >
                <ShoppingCart size={24} />
                <span>{t('product_detail.add_to_cart')}</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-100">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-brand">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('product_detail.authentic_only')}</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-brand">
                  <Truck size={20} />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('product_detail.fast_shipping')}</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-brand">
                  <RefreshCw size={20} />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('product_detail.easy_returns')}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Similar Items */}
        <div>
          <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-12">{t('product_detail.similar_items')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {similarItems.map((item, idx) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="group"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="relative aspect-square bg-slate-50 rounded-3xl overflow-hidden mb-4">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-bold text-slate-900 mb-1 group-hover:text-brand transition-colors">{item.name}</h4>
                <p className="text-slate-500 font-medium">{item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
