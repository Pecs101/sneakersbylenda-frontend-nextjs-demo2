import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, ArrowRight, Chrome, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: () => void;
}

export default function AuthModal({ isOpen, onClose, onLoginSuccess }: AuthModalProps) {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
            className="relative w-full max-w-md bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-900"
            >
              <X size={24} />
            </button>

            <div className="mb-8">
              <h2 className="text-3xl font-display font-black text-slate-900 mb-4 uppercase tracking-tight">
                Entrar / Registar
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Inicia sessão para continuares com a tua compra e acompanhares o teu pedido.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <button 
                onClick={onLoginSuccess}
                className="w-full flex items-center justify-center space-x-3 py-4 px-6 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all group"
              >
                <Chrome size={20} className="text-slate-900" />
                <span className="font-bold text-slate-900">Continuar com Google</span>
              </button>
              <button 
                onClick={onLoginSuccess}
                className="w-full flex items-center justify-center space-x-3 py-4 px-6 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all group"
              >
                <Facebook size={20} className="text-blue-600 fill-blue-600" />
                <span className="font-bold text-slate-900">Continuar com Facebook</span>
              </button>
            </div>

            <div className="relative flex items-center justify-center mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <span className="relative px-4 bg-white text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                Ou com e-mail
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                  Endereço de e-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="email" 
                    placeholder="exemplo@email.com"
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                  />
                </div>
              </div>

              <button 
                onClick={onLoginSuccess}
                className="w-full flex items-center justify-center space-x-3 py-5 bg-slate-950 text-white rounded-2xl font-bold hover:bg-brand transition-all group"
              >
                <span className="tracking-tight">Receber Código OTP</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
