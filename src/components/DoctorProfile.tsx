import { motion } from 'motion/react';
import { Star, Calendar, Award, Stethoscope, Clock } from 'lucide-react';
import doctorImg from '../assets/images/doctor_portrait_1789057939806.jpg';
import { CLINIC_INFO } from '../data/clinicData';

interface DoctorProfileProps {
  onOpenBooking: () => void;
}

export default function DoctorProfile({ onOpenBooking }: DoctorProfileProps) {
  const { doctor } = CLINIC_INFO;

  return (
    <section id="doctor" className="py-24 sm:py-32 lg:py-40 bg-[#171817] text-[#FAF9F5] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C927F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Large Editorial Portrait (Occupies ~48% of the section) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#242624]">
              <img
                src={doctorImg}
                alt="Dr. Anirban Chakraborty, Diabetologist at Lenus Specialty Clinic Kolkata"
                className="w-full aspect-[3/4] sm:aspect-[4/5] object-cover object-top filter brightness-[0.98] contrast-[1.03]"
                referrerPolicy="no-referrer"
              />
              {/* Subtle gradient scrim on bottom of portrait */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#171817] to-transparent pointer-events-none" />

              {/* Floating verified badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#171817]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#A4B5A6] font-semibold">Consulting Diabetologist</p>
                  <p className="text-sm font-medium text-white">Lenus Specialty Clinic, Kolkata</p>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-full text-xs text-white">
                  <Star className="w-3.5 h-3.5 fill-[#E5B54F] text-[#E5B54F]" />
                  <span className="font-bold">4.8</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text & Philosophy Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A4B5A6] block mb-3">
                ASSOCIATED DOCTOR
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-medium tracking-tight text-[#FAF9F5] leading-tight">
                {doctor.name}
              </h2>
              <p className="text-lg sm:text-xl font-light text-[#C6CDC6] mt-2 tracking-wide">
                {doctor.title}
              </p>
            </div>

            {/* Quote Block */}
            <div className="relative pl-6 border-l-2 border-[#7C927F]">
              <p className="text-xl sm:text-2xl font-light italic leading-relaxed text-[#EDEAE1]">
                "{doctor.statement}"
              </p>
            </div>

            <p className="text-base text-[#B6BCB6] font-light leading-relaxed">
              Dr. Chakraborty works closely with patients across Kolkata to navigate the complexities of type 1, type 2, and gestational diabetes. His clinical practice balances careful glycemic assessment with practical changes that integrate into real lives.
            </p>

            {/* Verified Patient Rating Metric */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex text-[#E5B54F]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-2xl font-semibold text-white">4.8</span>
                  <span className="text-sm text-[#A6AEA6]">/ 5</span>
                </div>
                <p className="text-xs text-[#A6AEA6]">
                  Based on {doctor.rating.totalReviews}+ patient reviews on {doctor.rating.platform}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#C6CDC6] bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                <Clock className="w-4 h-4 text-[#7C927F]" />
                <span>Dedicated, unhurried consultations</span>
              </div>
            </div>

            {/* Consultation CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="doctor-book-cta"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold bg-[#FAF9F5] text-[#171817] hover:bg-[#EAE7DF] active:scale-[0.98] transition-all shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Book A Consultation</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-medium text-white border border-white/20 hover:bg-white/10 transition-colors"
              >
                <span>Call Clinic Directly</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
