
import React from 'react';
import { Service } from '../types';
import { ICON_MAP } from '../constants';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="bg-slate-50 dark:bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
        {ICON_MAP[service.icon]}
      </div>
      
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          {service.category}
        </span>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{service.title}</h3>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
          {service.description}
        </p>
      </div>
      
      <div className="mt-8 pt-6 border-t border-slate-50 dark:border-slate-800 flex items-center text-blue-600 dark:text-blue-400 font-bold text-sm">
        Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  );
};

export default ServiceCard;
