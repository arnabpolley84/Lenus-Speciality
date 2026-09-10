import { Phone, MapPin, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171817] text-[#D8D8D0] border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-widest uppercase text-white">
                LENUS
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#A6AEA6] font-light">
                SPECIALTY CLINIC
              </span>
              <span className="text-xs text-[#828B82] font-bengali mt-1">
                {CLINIC_INFO.bengaliName}
              </span>
            </div>

            <p className="text-sm text-[#A6AEA6] font-light max-w-sm leading-relaxed pt-2">
              Modern, human-centered diabetes care and clinical diabetology led by Dr. Anirban Chakraborty in Kalikapur, Kolkata.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-[#A6AEA6]">
              <li>
                <a href="#approach" className="hover:text-white transition-colors">
                  About Approach
                </a>
              </li>
              <li>
                <a href="#care" className="hover:text-white transition-colors">
                  Diabetes Care
                </a>
              </li>
              <li>
                <a href="#doctor" className="hover:text-white transition-colors">
                  Dr. Anirban Chakraborty
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Clinic Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Location & Contact
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-white text-[#A4B5A6] font-medium transition-colors"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Contact & Location
            </p>
            <div className="space-y-3 text-sm text-[#A6AEA6]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#7C927F] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  801, Kalikapur Road, Next to Lenskart,
                  <br />
                  Purbachal Kalitala, Kalikapur, Haltu,
                  <br />
                  Kolkata, West Bengal 700078
                </address>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Phone className="w-4 h-4 text-[#7C927F] shrink-0" />
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="text-white hover:text-[#7C927F] font-semibold transition-colors"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#828B82]">
          <p>© 2026 Lenus Specialty Clinic. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Specialized Diabetology Practice</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#D8D8D0] hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
