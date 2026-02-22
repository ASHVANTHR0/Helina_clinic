
import { Service, Doctor, Appointment } from '../types';
import { SERVICES, DOCTORS } from '../constants';

// Simulated database
let appointments: Appointment[] = [];

// Helper to simulate network latency
const delay = <T,>(data: T, ms = 600): Promise<T> => 
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

export const clinicApi = {
  // GET /api/services
  getServices: async (): Promise<Service[]> => {
    return delay(SERVICES);
  },

  // GET /api/doctors
  getDoctors: async (): Promise<Doctor[]> => {
    return delay(DOCTORS);
  },

  // POST /api/appointments
  createAppointment: async (appointment: Appointment): Promise<{ success: boolean; data: Appointment }> => {
    const newAppointment = { ...appointment, id: Math.random().toString(36).substr(2, 9) };
    appointments.push(newAppointment);
    console.log('New Appointment Recorded:', newAppointment);
    return delay({ success: true, data: newAppointment });
  },

  // GET /api/appointments (for demo purposes)
  getAppointments: async (): Promise<Appointment[]> => {
    return delay(appointments);
  }
};
