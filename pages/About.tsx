
import React, { useEffect, useState } from 'react';
import { Target, Eye, Users, Award } from 'lucide-react';
import { clinicApi } from '../services/api';
import { Doctor } from '../types';
import DoctorCard from '../components/DoctorCard';

const About: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    clinicApi.getDoctors().then(d => {
      setDoctors(d);
      setLoading(false);
    });
  }, []);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Clinic Story</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 2025, Healina Health has grown from a small family practice to a leading regional medical center, 
            driven by the belief that high-quality healthcare should be accessible, empathetic, and personalized.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users />, label: 'Happy Patients', value: '15,000+' },
              { icon: <Award />, label: 'Years of Experience', value: '12' },
              { icon: <Target />, label: 'Specialized Departments', value: '18' },
              { icon: <Eye />, label: 'Expert Doctors', value: '50+' }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="flex justify-center text-blue-600 mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 bg-blue-50 p-12 rounded-3xl">
              <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                To improve the health and well-being of the communities we serve by providing high-quality, 
                compassionate medical care through innovative technology and expert clinical leadership.
              </p>
            </div>
            <div className="space-y-6 bg-emerald-50 p-12 rounded-3xl">
              <div className="bg-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                To be the healthcare provider of choice, recognized for clinical excellence, 
                patient safety, and the use of cutting-edge treatments to transform lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Team */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Medical Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Meet the specialists who lead our departments and ensure your health is in expert hands.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              [1, 2, 3].map(i => <div key={i} className="h-96 bg-slate-200 animate-pulse rounded-2xl"></div>)
            ) : (
              doctors.map(doctor => <DoctorCard key={doctor.id} doctor={doctor} />)
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
