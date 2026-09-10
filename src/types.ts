export interface NavItem {
  label: string;
  href: string;
}

export interface CareArea {
  id: string;
  number: string;
  title: string;
  description: string;
  focus: string[];
}

export interface ClinicPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email?: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}
