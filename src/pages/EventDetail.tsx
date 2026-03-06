import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Clock, Ticket, Share2, ChevronLeft, ArrowRight, User, Info, CheckCircle2, Image as ImageIcon, Play, Maximize2 } from 'lucide-react';
import { EVENTS } from '../data/events';
import { useCart } from '../context/CartContext';

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  const event = EVENTS.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Event not found</h2>
          <Link to="/" className="text-brand font-bold hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: `ticket-${event.id}`,
      name: `${event.title} Ticket`,
      price: `$${event.basePrice}`,
      img: event.img
    });
    
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={activeImage} 
              alt="Gallery Preview" 
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <button className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors">
              <span className="sr-only">Close</span>
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img 
          src={event.img} 
          alt={event.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-8"
            >
              <div className="max-w-3xl">
                <Link 
                  to="/" 
                  className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors group"
                >
                  <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm font-bold uppercase tracking-widest">Back to Events</span>
                </Link>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-brand text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {event.status}
                  </span>
                  <span className="text-white/60 text-sm font-medium">Organized by {event.organizer}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-tight mb-6">
                  {event.title.toUpperCase()}
                </h1>
                <div className="flex flex-wrap gap-6 text-white/90">
                  <div className="flex items-center space-x-2">
                    <Calendar size={20} className="text-brand" />
                    <span className="font-bold">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={20} className="text-brand" />
                    <span className="font-bold">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={20} className="text-brand" />
                    <span className="font-bold">{event.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 w-full md:w-auto">
                <button 
                  onClick={handleAddToCart}
                  className={`px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl flex items-center justify-center space-x-3 ${
                    isAdded 
                    ? 'bg-emerald-500 text-white shadow-emerald-500/20' 
                    : 'bg-brand text-white hover:bg-brand/90 shadow-brand/20'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <CheckCircle2 size={24} />
                      <span>ADDED TO CART</span>
                    </>
                  ) : (
                    <>
                      <Ticket size={24} />
                      <span>GET TICKETS</span>
                    </>
                  )}
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center justify-center space-x-3">
                  <Share2 size={20} />
                  <span>SHARE EVENT</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Success Notification */}
      <AnimatePresence>
        {isAdded && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center space-x-3"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
              <CheckCircle2 size={14} />
            </div>
            <span className="font-bold text-sm tracking-wide">Ticket added to your cart!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-20">
            <section>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center space-x-3">
                <Info className="text-brand" />
                <span>ABOUT THIS EVENT</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {event.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-8 flex items-center space-x-3">
                <ArrowRight className="text-brand" />
                <span>EVENT HIGHLIGHTS</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {event.highlights.map((highlight, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-4 p-6 bg-slate-50 rounded-3xl border border-slate-100"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-brand"></div>
                    </div>
                    <p className="text-slate-700 font-medium leading-tight">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Promo Video Area */}
            {event.promoVideo && (
              <section className="relative group">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-display font-bold text-slate-900 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                      <Play className="text-brand" size={20} />
                    </div>
                    <span>PROMO VIDEO</span>
                  </h2>
                </div>
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl ring-1 ring-slate-200">
                  <video 
                    src={event.promoVideo} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                    controls
                    poster={event.img}
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                </div>
              </section>
            )}

            {/* Photo Gallery Area */}
            {event.gallery && event.gallery.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-display font-bold text-slate-900 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                      <ImageIcon className="text-brand" size={20} />
                    </div>
                    <span>EVENT GALLERY</span>
                  </h2>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{event.gallery.length} PHOTOS</span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {event.gallery.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => setActiveImage(img)}
                      className={`relative rounded-3xl overflow-hidden cursor-zoom-in group ${
                        idx === 0 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`Gallery ${idx + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                          <Maximize2 className="text-white" size={20} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            <section className="p-8 bg-slate-900 rounded-[2.5rem] text-white overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold mb-4">Location & Directions</h3>
                <p className="text-white/70 mb-8 max-w-md">{event.address}</p>
                <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-brand hover:text-white transition-all">
                  OPEN IN GOOGLE MAPS
                </button>
              </div>
              <MapPin size={200} className="absolute -right-10 -bottom-10 text-white/5 rotate-12" />
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Event Details</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-slate-600">
                    <Ticket size={20} />
                    <span className="font-medium">Price</span>
                  </div>
                  <span className="font-bold text-slate-900">{event.ticketPrice}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-slate-600">
                    <User size={20} />
                    <span className="font-medium">Organizer</span>
                  </div>
                  <span className="font-bold text-slate-900">{event.organizer}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-slate-600">
                    <Calendar size={20} />
                    <span className="font-medium">Date</span>
                  </div>
                  <span className="font-bold text-slate-900">{event.date}</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-brand rounded-[2.5rem] text-white">
              <h3 className="text-xl font-display font-bold mb-4 italic">Join the Community</h3>
              <p className="text-white/80 text-sm mb-6">Sign up for our newsletter to get early access to tickets and exclusive event drops.</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl placeholder:text-white/50 focus:outline-none focus:bg-white/30 transition-all"
                />
                <button className="w-full bg-white text-brand py-3 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
