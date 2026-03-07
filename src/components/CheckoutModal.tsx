import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Truck, Store, MapPin, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { cart, totalPrice } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');
  
  const deliveryFee = deliveryMethod === 'delivery' ? 5.00 : 0.00;
  const total = totalPrice + deliveryFee;

  // For the demo, we'll just show the first item if cart is empty or use a placeholder
  const displayItem = cart.length > 0 ? cart[0] : {
    name: 'AeroFlex Runner',
    price: '$199.00',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=200',
    quantity: 1
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">How do you want to get it?</h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-900 border border-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Product Summary */}
              <div className="flex items-center justify-between bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-xl overflow-hidden border border-slate-100 flex-shrink-0">
                    <img src={displayItem.img} alt={displayItem.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{displayItem.name}</h3>
                    <p className="text-xs text-slate-500">Black & Green / Qty: {displayItem.quantity || 1}</p>
                  </div>
                </div>
                <p className="font-bold text-green-700">{typeof displayItem.price === 'string' ? displayItem.price : `$${displayItem.price.toFixed(2)}`}</p>
              </div>

              {/* Delivery Method */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-900">Delivery method</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setDeliveryMethod('delivery')}
                    className={`p-6 rounded-2xl border-2 transition-all text-center flex flex-col items-center space-y-2 ${
                      deliveryMethod === 'delivery' 
                        ? 'border-green-600 bg-green-50/30' 
                        : 'border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <Truck className={deliveryMethod === 'delivery' ? 'text-green-600' : 'text-slate-400'} size={24} />
                    <div>
                      <p className={`font-bold text-sm ${deliveryMethod === 'delivery' ? 'text-green-700' : 'text-slate-900'}`}>Delivery</p>
                      <p className="text-[10px] text-slate-500">To your address</p>
                    </div>
                  </button>
                  <button 
                    onClick={() => setDeliveryMethod('pickup')}
                    className={`p-6 rounded-2xl border-2 transition-all text-center flex flex-col items-center space-y-2 ${
                      deliveryMethod === 'pickup' 
                        ? 'border-green-600 bg-green-50/30' 
                        : 'border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <Store className={deliveryMethod === 'pickup' ? 'text-green-600' : 'text-slate-400'} size={24} />
                    <div>
                      <p className={`font-bold text-sm ${deliveryMethod === 'pickup' ? 'text-green-700' : 'text-slate-900'}`}>Pickup</p>
                      <p className="text-[10px] text-slate-500">Visit our store</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Your full name"
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+238 000 0000"
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all placeholder:text-slate-400"
                  />
                </div>

                {deliveryMethod === 'delivery' && (
                  <div className="pt-4 space-y-4">
                    <div className="flex items-center space-x-2 text-green-700">
                      <MapPin size={16} />
                      <span className="text-xs font-bold uppercase tracking-wider">Delivery Address</span>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 ml-1">Street Address</label>
                      <input 
                        type="text" 
                        placeholder="Rua exemplo, Nr. 10"
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all placeholder:text-slate-400"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 ml-1">City</label>
                        <input 
                          type="text" 
                          placeholder="Praia"
                          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all placeholder:text-slate-400"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 ml-1">Zip Code</label>
                        <input 
                          type="text" 
                          placeholder="7600"
                          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-100 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-medium">Subtotal</span>
                  <span className="font-bold text-slate-900">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-medium">Delivery Fee</span>
                  <span className="font-bold text-slate-900">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="pt-3 border-t border-slate-200 flex justify-between items-center">
                  <span className="font-bold text-slate-900">Total</span>
                  <span className="text-xl font-bold text-green-700">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="p-6 bg-white border-t border-slate-100">
              <button className="w-full flex items-center justify-center space-x-3 py-4 bg-green-700 text-white rounded-2xl font-bold hover:bg-green-800 transition-all group shadow-lg shadow-green-100">
                <span>Continue to Payment</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
