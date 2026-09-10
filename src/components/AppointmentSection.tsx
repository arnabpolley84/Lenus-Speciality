import { motion } from 'motion/react';
import { Calendar, Phone, ArrowRight, Shield } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface AppointmentSectionProps {
  onOpenBooking: () => void;
}

export default function AppointmentSection({ onOpenBooking }: AppointmentSectionProps) {
  return (
    <section className="py-28 sm:py-36 lg:py-44 bg-[#171817] text-white relative overflow-hidden">
      {/* Editorial Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,146,127,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-widest text-[#D8D8D0]">
            <Shield className="w-3.5 h-3.5 text-[#7C927F]" />
            <span>Consultation With Dr. Anirban Chakraborty</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.03em] leading-[1.08] text-[#FAF9F5]">
            Your health deserves <br />
            <span className="italic font-normal text-[#A4B5A6]">
              thoughtful attention.
            </span>
          </h2>

          <p className="max-w-xl mx-auto text-lg sm:text-xl font-light text-[#D8D8D0] leading-relaxed">
            Take the next step toward better diabetes care. Consult with our specialist to build a steady, human-centered path forward.
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              id="bottom-book-cta"
              onClick={onOpenBooking}
              className="group inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold bg-[#FAF9F5] text-[#171817] hover:bg-[#EAE7DF] active:scale-[0.98] transition-all shadow-xl"
            >
              <Calendar className="w-4 h-4 text-[#586B5A]" />
              <span>Book An Appointment</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              id="bottom-call-cta"
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-[0.16em] font-medium text-white border border-white/20 hover:border-white hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4 text-[#7C927F]" />
              <span>Call {CLINIC_INFO.phone}</span>
            </a>
          </div>

          <div className="pt-8 text-xs text-[#A6AEA6]">
            <span>Lenus Specialty Clinic • 801, Kalikapur Road, Kolkata 700078</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
