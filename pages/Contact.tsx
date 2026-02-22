
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us via any of the channels below.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                  <p className="text-slate-600">123 Medical Plaza,<br />Chennai</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                  <p className="text-slate-600">General: +91 63837 58715</p>
                  {/* <p className="text-slate-600">Billing: +1 (555) 123-9999</p> */}
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-50 p-3 rounded-xl text-purple-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-600">healina@gmail.com</p>
                  {/* <p className="text-slate-600">careers@luminahealth.com</p> */}
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-amber-50 p-3 rounded-xl text-amber-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Working Hours</h4>
                  <p className="text-slate-600">Mon - Fri: 8:00 AM - 8:00 PM</p>
                  <p className="text-slate-600">Sat - Sun: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-lg">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">Thank you for contacting us. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-blue-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Your Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:outline-none" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:outline-none" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Subject</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:outline-none" placeholder="How can we help?" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <textarea rows={6} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:outline-none" placeholder="Write your message here..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center justify-center">
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="h-96 w-full bg-slate-200 rounded-3xl overflow-hidden relative grayscale">
          <img src="https://picsum.photos/seed/map/1200/400" alt="Map Placeholder" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Healina Health Clinic</p>
                <p className="text-xs text-slate-500">Chennai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
