import React from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, MapPin, Clock, ArrowRight, Bell, Filter, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EVENTS } from '../data/events';

export default function Calendar() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedMonth, setSelectedMonth] = React.useState('All');

  const filteredEvents = EVENTS.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMonth = selectedMonth === 'All' || event.date.includes(selectedMonth);
    return matchesSearch && matchesMonth;
  });

  const months = ['All', 'March', 'April', 'May', 'June', 'July'];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-brand text-xs font-bold uppercase tracking-widest mb-8">
              <CalendarIcon size={14} />
              <span>Community Hub</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black tracking-tighter mb-6">
              EVENT <span className="text-brand">CALENDAR</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Don't miss a single drop, pop-up, or community gathering. 
              Stay ahead of the culture with our curated event schedule.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-8 px-6 sticky top-20 z-40 bg-slate-50/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
              {months.map((month) => (
                <button
                  key={month}
                  onClick={() => setSelectedMonth(month)}
                  className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                    selectedMonth === month 
                      ? 'bg-slate-950 text-white shadow-lg' 
                      : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search events or cities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-3 rounded-full bg-white border border-slate-200 focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all text-slate-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {filteredEvents.length > 0 ? (
            <div className="space-y-12">
              {filteredEvents.map((event, idx) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="lg:w-1/3 relative overflow-hidden">
                      <img 
                        src={event.img} 
                        alt={event.title}
                        className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl p-3 text-center min-w-[70px] shadow-lg">
                        <span className="block text-2xl font-black text-slate-950 leading-none">
                          {event.date.split(' ')[1].replace(',', '')}
                        </span>
                        <span className="block text-[10px] font-bold text-brand uppercase tracking-widest mt-1">
                          {event.date.split(' ')[0]}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-2/3 p-6 sm:p-8 md:p-12 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                            event.status === 'Live' ? 'bg-red-500 text-white animate-pulse' : 'bg-brand/10 text-brand'
                          }`}>
                            {event.status}
                          </span>
                          <button className="text-slate-400 hover:text-brand transition-colors">
                            <Bell size={20} />
                          </button>
                        </div>
                        
                        <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4 group-hover:text-brand transition-colors">
                          {event.title}
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center space-x-3 text-slate-500">
                            <Clock size={18} className="text-brand" />
                            <span className="text-sm font-medium">{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-3 text-slate-500">
                            <MapPin size={18} className="text-brand" />
                            <span className="text-sm font-medium">{event.location}</span>
                          </div>
                        </div>

                        <p className="text-slate-500 line-clamp-2 mb-8 leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      <div className="flex flex-col sm:items-center sm:justify-between pt-8 border-t border-slate-100 gap-6 sm:flex-row">
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Tickets from</p>
                          <p className="text-xl font-black text-slate-950">{event.ticketPrice}</p>
                        </div>
                        <Link 
                          to={`/event/${event.id}`}
                          className="flex items-center justify-center space-x-2 px-8 py-4 bg-slate-950 text-white rounded-full font-bold hover:bg-brand transition-all group/btn w-full sm:w-auto"
                        >
                          <span>VIEW DETAILS</span>
                          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                <Search size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No events found</h3>
              <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedMonth('All'); }}
                className="mt-8 text-brand font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-black/5 -skew-x-12 translate-x-1/4" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-6">
                  NEVER MISS <br />A DROP AGAIN
                </h2>
                <p className="text-white/80 text-lg">
                  Subscribe to our priority list and get notified about upcoming events, 
                  exclusive pop-ups, and early ticket access.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-8 py-5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20 transition-all"
                />
                <button className="px-10 py-5 bg-white text-brand rounded-full font-bold hover:bg-slate-100 transition-all">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
