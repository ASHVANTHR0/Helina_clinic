
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { clinicApi } from '../services/api';
import { Service, Appointment } from '../types';

const Booking: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [formData, setFormData] = useState<Appointment>({
    name: '',
    email: '',
    phone: '',
    date: '',
    serviceId: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof Appointment, string>>>({});

  useEffect(() => {
    clinicApi.getServices().then(setServices);
  }, []);

  const validate = () => {
    const newErrors: Partial<Record<keyof Appointment, string>> = {};
    if (!formData.name) newErrors.name = 'Full name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.date) newErrors.date = 'Preferred date is required';
    if (!formData.serviceId) newErrors.serviceId = 'Please select a service';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await clinicApi.createAppointment(formData);
      setSubmitted(true);
      window.scrollTo(0, 0);
    } catch (err) {
      alert('Unable to process your request. Please try calling us directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof Appointment]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-32 max-w-4xl mx-auto px-4 text-center animate-fade-in">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-12 lg:p-20 shadow-2xl border border-slate-100 dark:border-slate-800">
          <div className="bg-emerald-500 w-20 h-20 rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-lg shadow-emerald-500/30">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Appointment Request Received</h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed">
            Thank you for choosing Healina Health. One of our patient care coordinators will contact you shortly to confirm your specific time slot.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-12 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg transition-transform hover:scale-105"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32 relative page-transition">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12 animate-fade-in-up">
            <div className="space-y-6">
              <h2 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm">Online Booking</h2>
              <h1 className="text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">Schedule Your Visit</h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                Provide your details below to request an appointment. Our team ensures a seamless onboarding process for new and returning patients.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Clock className="w-6 h-6" />, title: 'Priority Scheduling', desc: 'Urgent requests are addressed within the same business day.' },
                { icon: <FileText className="w-6 h-6" />, title: 'Secure Handling', desc: 'Your medical data is protected by the highest encryption standards.' }
              ].map((item, i) => (
                <div key={i} className="flex space-x-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm animate-fade-in stagger-2">
                  <div className="text-blue-600 dark:text-blue-400 flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 lg:p-14 shadow-2xl border border-slate-100 dark:border-slate-800 animate-fade-in-up stagger-1">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Robert Smith"
                      onChange={handleChange}
                      className={`w-full bg-slate-50 dark:bg-slate-800/50 pl-12 pr-6 py-4 rounded-xl border-2 ${errors.name ? 'border-red-500' : 'border-transparent'} focus:border-blue-500 outline-none transition-all dark:text-white`}
                    />
                  </div>
                  {errors.name && <p className="text-xs text-red-500 ml-1">{errors.name}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@email.com"
                      onChange={handleChange}
                      className={`w-full bg-slate-50 dark:bg-slate-800/50 px-6 py-4 rounded-xl border-2 ${errors.email ? 'border-red-500' : 'border-transparent'} focus:border-blue-500 outline-none transition-all dark:text-white`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(555) 000-0000"
                      onChange={handleChange}
                      className={`w-full bg-slate-50 dark:bg-slate-800/50 px-6 py-4 rounded-xl border-2 ${errors.phone ? 'border-red-500' : 'border-transparent'} focus:border-blue-500 outline-none transition-all dark:text-white`}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      onChange={handleChange}
                      className={`w-full bg-slate-50 dark:bg-slate-800/50 px-6 py-4 rounded-xl border-2 ${errors.date ? 'border-red-500' : 'border-transparent'} focus:border-blue-500 outline-none transition-all dark:text-white`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Department</label>
                    <select
                      name="serviceId"
                      onChange={handleChange}
                      className={`w-full bg-slate-50 dark:bg-slate-800/50 px-6 py-4 rounded-xl border-2 ${errors.serviceId ? 'border-red-500' : 'border-transparent'} focus:border-blue-500 outline-none transition-all dark:text-white appearance-none`}
                    >
                      <option value="">Select a department...</option>
                      {services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message (Optional)</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Briefly describe your symptoms or reason for visit..."
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 px-6 py-4 rounded-xl border-2 border-transparent focus:border-blue-500 outline-none transition-all dark:text-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-blue-600 text-white rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 active:scale-95 transition-all shadow-lg"
              >
                {loading ? 'Submitting Request...' : 'Request Appointment'}
              </button>
              
              <p className="text-center text-xs text-slate-400 font-medium">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
