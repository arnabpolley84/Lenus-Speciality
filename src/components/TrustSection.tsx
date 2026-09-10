import { motion } from 'motion/react';
import { Star, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function TrustSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F5] text-[#171817] border-y border-[#171817]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#5F665F] block mb-3">
              PATIENT FEEDBACK & TRUST
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#171817]">
              Trusted by patients seeking{' '}
              <span className="font-normal italic text-[#586B5A]">
                thoughtful diabetes care.
              </span>
            </h2>
          </div>
          <p className="text-sm text-[#5F665F] max-w-sm font-light">
            Independently verified ratings reflecting our commitment to patient listening, clear explanations, and clinical thoroughness.
          </p>
        </div>

        {/* Large Editorial Numbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Dr. Anirban Chakraborty Metric Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 sm:p-12 rounded-3xl bg-[#EDEAE1] border border-[#171817]/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#586B5A]">
                  ASSOCIATED DIABETOLOGIST
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-[#5F665F]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#7C927F]" />
                  Verified on Google
                </span>
              </div>

              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter text-[#171817]">
                  4.8
                </span>
                <div className="flex flex-col">
                  <div className="flex text-[#E5B54F]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-[#5F665F] font-medium mt-1">out of 5.0</span>
                </div>
              </div>

              <p className="text-xl sm:text-2xl font-medium text-[#171817] mb-2">
                Dr. Anirban Chakraborty
              </p>
              <p className="text-sm sm:text-base text-[#5F665F] font-light">
                Based on 364+ patient ratings for clinical consultation, attentiveness, and diabetes guidance.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#171817]/10 flex items-center justify-between text-xs text-[#5F665F]">
              <span>Diabetology Practice</span>
              <span className="font-mono">364+ Reviews</span>
            </div>
          </motion.div>

          {/* Lenus Specialty Clinic Metric Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-8 sm:p-12 rounded-3xl bg-[#EDEAE1] border border-[#171817]/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#586B5A]">
                  CLINIC LOCATION
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-[#5F665F]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#7C927F]" />
                  Verified on Google
                </span>
              </div>

              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter text-[#171817]">
                  4.1
                </span>
                <div className="flex flex-col">
                  <div className="flex text-[#E5B54F]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? 'fill-current' : 'text-[#D8D8D0] fill-transparent'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-[#5F665F] font-medium mt-1">out of 5.0</span>
                </div>
              </div>

              <p className="text-xl sm:text-2xl font-medium text-[#171817] mb-2">
                Lenus Specialty Clinic
              </p>
              <p className="text-sm sm:text-base text-[#5F665F] font-light">
                Based on 37 Google reviews for facility cleanliness, staff professionalism, and calm care environment in Kalikapur.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#171817]/10 flex items-center justify-between text-xs text-[#5F665F]">
              <span>Kalikapur Road, Kolkata</span>
              <span className="font-mono">37 Reviews</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
