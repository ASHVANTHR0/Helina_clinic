
import React, { useEffect, useState } from 'react';
import { clinicApi } from '../services/api';
import { Service } from '../types';
import ServiceCard from '../components/ServiceCard';
import { Search } from 'lucide-react';

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    clinicApi.getServices().then(s => {
      setServices(s);
      setLoading(false);
    });
  }, []);

  const categories = ['All', ...new Set(services.map(s => s.category))];
  const filteredServices = filter === 'All' ? services : services.filter(s => s.category === filter);

  return (
    <div className="pt-24 pb-20">
      <section className="bg-blue-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Comprehensive healthcare solutions tailored to your lifestyle and health needs.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Filtering */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-64 bg-slate-100 animate-pulse rounded-2xl"></div>)}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {filteredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredServices.length === 0 && (
          <div className="text-center py-20">
            <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900">No services found in this category</h3>
            <button 
              onClick={() => setFilter('All')}
              className="mt-4 text-blue-600 font-bold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
