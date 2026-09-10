import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import ClinicExperience from './components/ClinicExperience';
import DiabetesCare from './components/DiabetesCare';
import DoctorProfile from './components/DoctorProfile';
import TrustSection from './components/TrustSection';
import VisualStorytelling from './components/VisualStorytelling';
import WhyLenus from './components/WhyLenus';
import ClinicInfo from './components/ClinicInfo';
import AppointmentSection from './components/AppointmentSection';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from './data/clinicData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#171817] font-sans antialiased selection:bg-[#7C927F]/20 selection:text-[#171817]">
      {/* Editorial Navigation */}
      <Header onOpenBooking={handleOpenBooking} />

      <main>
        {/* Section 1: Hero Section with Biograph-inspired Faded Image Treatment & Large Editorial Typography */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Section 2: Introduction ("Diabetes care is more than numbers.") */}
        <Introduction />

        {/* Section 3: The Clinic Experience ("Care that looks at the bigger picture.") */}
        <ClinicExperience />

        {/* Section 4: Diabetes Care (Editorial Stacked Layout 01–05) */}
        <DiabetesCare onOpenBooking={handleOpenBooking} />

        {/* Section 5: Doctor Profile (Dr. Anirban Chakraborty, Diabetologist) */}
        <DoctorProfile onOpenBooking={handleOpenBooking} />

        {/* Section 6: Trust / Patient Feedback (Editorial Large Factual Numbers) */}
        <TrustSection />

        {/* Section 7: Visual Storytelling ("Healthcare should feel personal.") */}
        <VisualStorytelling />

        {/* Section 8: Why Lenus (5 Principles in Editorial Asymmetric Layout) */}
        <WhyLenus />

        {/* Section 9: Clinic Information (Kalikapur Road, Next to Lenskart, Map Visual, Directions & Call) */}
        <ClinicInfo onOpenBooking={handleOpenBooking} />

        {/* Section 10: Appointment CTA ("Your health deserves thoughtful attention.") */}
        <AppointmentSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Editorial Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Appointment Modal */}
      <AppointmentModal isOpen={isBookingOpen} onClose={handleCloseBooking} />

      {/* Sticky Quick-Action Bar on Mobile / Tablet */}
      <div className="fixed bottom-5 right-5 z-40 sm:hidden flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="w-12 h-12 rounded-full bg-[#171817] text-white flex items-center justify-center shadow-lg border border-white/20 active:scale-95 transition-transform"
          aria-label="Call Clinic"
        >
          <Phone className="w-5 h-5 text-[#7C927F]" />
        </a>
        <button
          onClick={handleOpenBooking}
          className="h-12 px-5 rounded-full bg-[#7C927F] text-white font-medium text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg active:scale-95 transition-transform"
          aria-label="Book Appointment"
        >
          <Calendar className="w-4 h-4" />
          <span>Book</span>
        </button>
      </div>
    </div>
  );
}
