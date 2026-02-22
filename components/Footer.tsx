
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-blue-600 p-2.5 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-blue-500/40">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <span className="text-2xl font-black tracking-tighter">Healina</span>
            </Link>
            <p className="text-slate-500 font-medium leading-relaxed max-w-xs">
              Healthcare for the digital generation. Science-backed, community-driven, vibe-checked.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-blue-500">Navigation</h4>
            <ul className="space-y-6">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors font-bold">The Team</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors font-bold">Services</Link></li>
              <li><Link to="/book" className="text-slate-400 hover:text-white transition-colors font-bold">Optimizer Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-blue-500">Legals</h4>
            <ul className="space-y-6">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors font-bold">Privacy Protocol</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors font-bold">Terms of Vibe</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors font-bold">Cookies</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-blue-500">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-slate-400 font-bold text-sm">123 Health Blvd, Silicon Valley, CA</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-slate-400 font-bold text-sm">Healina@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-xs font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} LUMINA CLINIC GROUP
          </p>
          <div className="flex space-x-8 text-xs font-black uppercase tracking-widest text-slate-600">
            <span>Built for Tomorrow</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
