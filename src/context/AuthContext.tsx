import React, { createContext, useContext, useState, ReactNode } from 'react';
import AuthModal from '../components/AuthModal';
import CheckoutModal from '../components/CheckoutModal';

interface AuthContextType {
  openAuthModal: () => void;
  closeAuthModal: () => void;
  isAuthModalOpen: boolean;
  openCheckoutModal: () => void;
  closeCheckoutModal: () => void;
  isCheckoutModalOpen: boolean;
  handleLoginSuccess: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  const openCheckoutModal = () => setIsCheckoutModalOpen(true);
  const closeCheckoutModal = () => setIsCheckoutModalOpen(false);

  const handleLoginSuccess = () => {
    setIsAuthModalOpen(false);
    // Small delay for smooth transition
    setTimeout(() => {
      setIsCheckoutModalOpen(true);
    }, 300);
  };

  return (
    <AuthContext.Provider value={{ 
      openAuthModal, 
      closeAuthModal, 
      isAuthModalOpen,
      openCheckoutModal,
      closeCheckoutModal,
      isCheckoutModalOpen,
      handleLoginSuccess
    }}>
      {children}
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} onLoginSuccess={handleLoginSuccess} />
      <CheckoutModal isOpen={isCheckoutModalOpen} onClose={closeCheckoutModal} />
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
