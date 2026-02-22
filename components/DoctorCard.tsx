
import React from 'react';
import { Doctor } from '../types';
import { GraduationCap } from 'lucide-react';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="group relative overflow-hidden bg-white rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-lg">
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-1">{doctor.name}</h3>
        <p className="text-blue-600 text-sm font-semibold mb-3">{doctor.specialty}</p>
        <div className="flex items-center text-slate-500 text-sm mb-4">
          <GraduationCap className="w-4 h-4 mr-2" />
          <span>{doctor.education}</span>
        </div>
        <p className="text-slate-600 text-sm line-clamp-2 italic">
          "{doctor.bio}"
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;
