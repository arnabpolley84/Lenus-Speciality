import { CareArea, ClinicPrinciple } from '../types';

export const CLINIC_INFO = {
  name: 'LENUS SPECIALTY CLINIC',
  bengaliName: 'লেনাস স্পেশ্যালটি ক্লিনিক',
  tagline: 'Modern, human-centered diabetes care',
  specialization: 'Diabetology / Diabetes Care',
  phone: '089109 02547',
  phoneFormatted: '+91 89109 02547',
  phoneRaw: '08910902547',
  address: {
    line1: '801, Kalikapur Road',
    landmark: 'Next to Lenskart, Purbachal Kalitala',
    area: 'Kalikapur, Haltu',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700078',
    full: '801, Kalikapur Road, Next to Lenskart, Purbachal Kalitala, Kalikapur, Haltu, Kolkata, West Bengal 700078',
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Lenus+Specialty+Clinic+801+Kalikapur+Road+Kolkata+700078',
  clinicRating: {
    score: 4.1,
    totalReviews: 37,
    platform: 'Google Reviews',
  },
  doctor: {
    name: 'Dr. Anirban Chakraborty',
    title: 'Diabetologist',
    statement: 'Focused on helping patients understand, manage and improve their diabetes health through thoughtful, personalized care.',
    rating: {
      score: 4.8,
      totalReviews: 364,
      platform: 'Google Reviews',
    },
  },
};

export const CARE_AREAS: CareArea[] = [
  {
    id: 'assessment',
    number: '01',
    title: 'Diabetes Assessment',
    description: 'Comprehensive initial evaluation analyzing metabolic health, glucose patterns, medical history, and individual risk factors.',
    focus: ['HbA1c & Fasting Profiles', 'Complication Risk Screening', 'Metabolic Health Review'],
  },
  {
    id: 'blood-sugar',
    number: '02',
    title: 'Blood Sugar Management',
    description: 'Evidence-based glycemic control strategies tailored to steady daily glucose ranges and minimize sudden highs and lows.',
    focus: ['Target Glucose Setting', 'Medication Optimization', 'Glycemic Variability Reduction'],
  },
  {
    id: 'lifestyle-nutrition',
    number: '03',
    title: 'Lifestyle & Nutrition Guidance',
    description: 'Practical dietary recommendations and sustainable lifestyle modifications designed around regional Kolkata food cultures and daily routines.',
    focus: ['Dietary Planning', 'Physical Activity Guidance', 'Daily Habit Coaching'],
  },
  {
    id: 'long-term-monitoring',
    number: '04',
    title: 'Long-Term Monitoring',
    description: 'Continuous oversight and structured check-ins to evaluate therapy responses, prevent organ complications, and maintain steady progress.',
    focus: ['Organ Function Checkups', 'Scheduled Review Cadence', 'Proactive Health Trajectory'],
  },
  {
    id: 'personalized-planning',
    number: '05',
    title: 'Personalized Treatment Planning',
    description: 'Dynamic care plans constructed in collaboration with the patient, adapting as health milestones, lifestyle shifts, and age evolve.',
    focus: ['Individualized Targets', 'Collaborative Decisions', 'Continuous Refinement'],
  },
];

export const CLINIC_PRINCIPLES: ClinicPrinciple[] = [
  {
    number: '01',
    title: 'Personalized Attention',
    description: 'Care shaped around the individual rather than a one-size-fits-all approach, respecting unique biological factors and daily life.',
  },
  {
    number: '02',
    title: 'Clear Communication',
    description: 'Medical information explained in calm, straightforward language that patients and their families can truly understand and act upon.',
  },
  {
    number: '03',
    title: 'Long-Term Focus',
    description: 'Diabetes management is an ongoing health partnership, not a rushed, one-time clinical appointment.',
  },
  {
    number: '04',
    title: 'Patient-Centered Care',
    description: 'Respect, patient listening, and deep clinical empathy remain central to every diagnostic evaluation and follow-up.',
  },
  {
    number: '05',
    title: 'Modern Healthcare Experience',
    description: 'A serene, professional setting equipped to provide seamless consultations, punctuality, and responsive care coordination.',
  },
];
