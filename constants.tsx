
import React from 'react';
import { Stethoscope, HeartPulse, Brain, Baby, Bone, Activity } from 'lucide-react';
import { Service, Doctor, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'gen-med',
    title: 'General Medicine',
    description: 'Comprehensive health care for individuals and families across all ages.',
    icon: 'Stethoscope',
    category: 'Primary Care'
  },
  {
    id: 'cardio',
    title: 'Cardiology',
    description: 'Advanced heart care focusing on prevention, diagnosis, and treatment.',
    icon: 'HeartPulse',
    category: 'Specialized'
  },
  {
    id: 'neuro',
    title: 'Neurology',
    description: 'Expert treatment for disorders of the nervous system and brain.',
    icon: 'Brain',
    category: 'Specialized'
  },
  {
    id: 'peds',
    title: 'Pediatrics',
    description: 'Specialized medical care for infants, children, and adolescents.',
    icon: 'Baby',
    category: 'Primary Care'
  },
  {
    id: 'ortho',
    title: 'Orthopedics',
    description: 'Comprehensive care for bones, joints, and musculoskeletal systems.',
    icon: 'Bone',
    category: 'Surgical'
  },
  {
    id: 'physio',
    title: 'Physical Therapy',
    description: 'Rehabilitation services to restore movement and functional ability.',
    icon: 'Activity',
    category: 'Rehabilitation'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-smith',
    name: 'Dr. Sarah Smith',
    specialty: 'Chief Medical Officer',
    bio: 'With over 15 years of experience in internal medicine, Dr. Smith leads our clinical team.',
    image: 'https://picsum.photos/seed/doctor1/400/500',
    education: 'Harvard Medical School'
  },
  {
    id: 'dr-chen',
    name: 'Dr. David Chen',
    specialty: 'Senior Cardiologist',
    bio: 'Specializing in interventional cardiology and heart failure management.',
    image: 'https://picsum.photos/seed/doctor2/400/500',
    education: 'Johns Hopkins University'
  },
  {
    id: 'dr-wilson',
    name: 'Dr. Elena Wilson',
    specialty: 'Pediatric Specialist',
    bio: 'Dedicated to providing compassionate care for children and supporting family wellness.',
    image: 'https://picsum.photos/seed/doctor3/400/500',
    education: 'Stanford University'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'James Rodriguez',
    role: 'Patient',
    content: 'The level of care I received at Lumina was exceptional. The staff is professional and the facilities are top-notch.',
    rating: 5
  },
  {
    id: '2',
    name: 'Linda Thompson',
    role: 'Local Resident',
    content: 'Booking an appointment was seamless. Dr. Wilson was incredibly patient with my toddler.',
    rating: 5
  },
  {
    id: '3',
    name: 'Robert Miller',
    role: 'Patient',
    content: 'Highly recommend their cardiology department. Clear communication and thorough follow-ups.',
    rating: 4
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-8 h-8 text-blue-500" />,
  HeartPulse: <HeartPulse className="w-8 h-8 text-rose-500" />,
  Brain: <Brain className="w-8 h-8 text-purple-500" />,
  Baby: <Baby className="w-8 h-8 text-emerald-500" />,
  Bone: <Bone className="w-8 h-8 text-amber-500" />,
  Activity: <Activity className="w-8 h-8 text-cyan-500" />
};
