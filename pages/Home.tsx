
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Activity, Users, Star, ArrowUpRight } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { clinicApi } from '../services/api';
import { Service } from '../types';
import { TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    clinicApi.getServices().then(s => {
      setServices(s.slice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col dark:text-white page-transition">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-36 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-white dark:bg-slate-950 transition-colors duration-500">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[100px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold tracking-wide">
                <ShieldCheck className="w-4 h-4 mr-2" />
                Trusted by 15,000+ Families
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Compassionate Care. <br />
                <span className="text-blue-600 dark:text-blue-400">Modern Solutions.</span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-xl">
                Healina Health combines world-class medical expertise with personalized attention, providing a healthcare experience that respects your time and your family.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/book"
                  className="px-10 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center group"
                >
                  Book Appointment <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="px-10 py-4 bg-white dark:bg-slate-900 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center"
                >
                  View Services
                </Link>
              </div>
              
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?u=${i + 10}`} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900" alt="patient" />
                    ))}
                  </div>
                  <div className="pl-2">
                    <div className="flex text-amber-400 mb-0.5">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">4.9/5 Patient Rating</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block animate-fade-in stagger-2">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-900 transition-transform duration-700 hover:scale-[1.02]">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                  alt="Professional Healthcare" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              {/* Floating Highlight Card */}
              <div className="absolute -bottom-6 -left-10 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 max-w-xs animate-fade-in-up stagger-3">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="bg-blue-100 dark:bg-blue-500/20 p-2 rounded-lg">
                    <Activity className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Expert Specialists</h4>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Over 50+ board-certified doctors across 12 medical departments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm">Our Specialties</h2>
              <h3 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Personalized Care Paths</h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl font-medium">
                We provide a comprehensive range of clinical services tailored to every stage of life, from pediatric care to geriatric medicine.
              </p>
            </div>
            <Link to="/services" className="px-6 py-3 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-white font-bold rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all flex items-center">
              View All Services <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {loading ? (
              [1, 2, 3].map(i => <div key={i} className="h-80 bg-slate-100 dark:bg-slate-800 animate-pulse rounded-2xl"></div>)
            ) : (
              services.map((service, idx) => (
                <div key={service.id} className={`animate-fade-in-up stagger-${idx + 1}`}>
                  <ServiceCard service={service} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white">What Our Patients Say</h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">Providing a consistent, high-quality experience for over 12 years.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={t.id} className={`bg-white dark:bg-slate-900 p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm animate-fade-in-up stagger-${idx + 1}`}>
                <div className="flex text-amber-400 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'fill-current' : 'text-slate-200 dark:text-slate-700'}`} />)}
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${t.id + 100}`} alt={t.name} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{t.name}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-500/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Begin Your Journey to <br />Better Health Today.
            </h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto">
              Our patient coordination team is ready to help you find the right specialist and schedule your visit.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/book"
                className="px-10 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl"
              >
                Schedule Appointment
              </Link>
              <Link
                to="/contact"
                className="px-10 py-4 border border-blue-400 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
