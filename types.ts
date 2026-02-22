
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  education: string;
}

export interface Appointment {
  id?: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  serviceId: string;
  message?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}
