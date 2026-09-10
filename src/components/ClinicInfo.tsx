import { motion } from 'motion/react';
import { MapPin, Phone, Navigation, Clock, Calendar, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface ClinicInfoProps {
  onOpenBooking: () => void;
}

export default function ClinicInfo({ onOpenBooking }: ClinicInfoProps) {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF9F5] text-[#171817] border-t border-[#171817]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#5F665F] block mb-4">
            VISIT & CONNECT
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171817]">
            Clinic Information &{' '}
            <span className="font-normal italic text-[#586B5A]">Access.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F665F] font-light">
            Conveniently located on Kalikapur Road in South Kolkata with easy road accessibility and landmark visibility.
          </p>
        </div>

        {/* Information Grid & Location Map Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          {/* Clinic Address & Action Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 p-8 sm:p-12 rounded-3xl bg-[#EDEAE1] border border-[#171817]/10 flex flex-col justify-between"
          >
            <div>
              <div className="mb-8">
                <span className="text-xs uppercase tracking-[0.25em] text-[#586B5A] font-bold">
                  PRACTICE LOCATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#171817] mt-2">
                  {CLINIC_INFO.name}
                </h3>
                <p className="text-sm font-bengali text-[#5F665F] mt-1">
                  {CLINIC_INFO.bengaliName}
                </p>
              </div>

              {/* Physical Address Details */}
              <div className="space-y-6 text-sm sm:text-base text-[#3C403C]">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#171817]/5">
                    <MapPin className="w-4 h-4 text-[#7C927F]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#171817]">
                      {CLINIC_INFO.address.line1}
                    </p>
                    <p className="text-[#5F665F]">
                      {CLINIC_INFO.address.landmark}
                    </p>
                    <p className="text-[#5F665F]">
                      {CLINIC_INFO.address.area}, {CLINIC_INFO.address.city}
                    </p>
                    <p className="text-xs text-[#586B5A] font-medium mt-1">
                      {CLINIC_INFO.address.state} — {CLINIC_INFO.address.pincode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#171817]/5">
                    <Phone className="w-4 h-4 text-[#7C927F]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#171817]">Direct Appointment Desk</p>
                    <a
                      href={`tel:${CLINIC_INFO.phoneRaw}`}
                      className="text-lg font-semibold text-[#171817] hover:text-[#586B5A] transition-colors"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                    <p className="text-xs text-[#5F665F]">
                      Call for consultation slots & directions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#171817]/5">
                    <Clock className="w-4 h-4 text-[#7C927F]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#171817]">Doctor Consultations</p>
                    <p className="text-sm text-[#5F665F]">
                      By scheduled appointment with Dr. Anirban Chakraborty
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-10 flex flex-wrap gap-4">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#171817] text-white hover:bg-[#3C403C] transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call The Clinic</span>
              </a>

              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-white text-[#171817] border border-[#171817]/15 hover:bg-[#FAF9F5] transition-colors shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 text-[#586B5A]" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 text-[#5F665F]" />
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#7C927F] text-white hover:bg-[#586B5A] transition-colors shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>
          </motion.div>

          {/* Interactive Visual Map & Landmark Locator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 rounded-3xl p-8 sm:p-12 bg-[#F5F3EE] border border-[#171817]/10 flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#586B5A]">
                  KOLKATA LOCATION
                </span>
                <span className="text-xs font-mono text-[#5F665F]">
                  KALIKAPUR ROAD
                </span>
              </div>

              <h3 className="text-2xl font-medium text-[#171817] mb-3">
                Next to Lenskart, Kalitala
              </h3>
              <p className="text-sm text-[#5F665F] font-light leading-relaxed mb-6">
                The clinic is located along Kalikapur Road adjacent to the Lenskart showroom at Purbachal Kalitala, easily reachable from EM Bypass, Ruby Hospital junction, Jadavpur, and Garia.
              </p>

              {/* Stylized Visual Map Card */}
              <div className="w-full h-56 sm:h-64 rounded-2xl bg-[#EDEAE1] border border-[#171817]/10 relative p-6 flex flex-col justify-between overflow-hidden shadow-inner">
                {/* Subtle map graphical grid */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage:
                      'radial-gradient(#171817 1px, transparent 1px), radial-gradient(#171817 1px, #EDEAE1 1px)',
                    backgroundSize: '24px 24px',
                    backgroundPosition: '0 0, 12px 12px',
                  }}
                />

                {/* Road Line Simulation */}
                <div className="absolute top-1/2 left-0 right-0 h-4 bg-white/70 -translate-y-1/2 -rotate-3 border-y border-[#171817]/10 flex items-center justify-center">
                  <span className="text-[10px] font-mono tracking-widest text-[#171817]/40 uppercase">
                    Kalikapur Main Road
                  </span>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-semibold bg-white/90 px-2.5 py-1 rounded-md text-[#171817] shadow-sm">
                    Purbachal Kalitala
                  </span>
                  <span className="text-[11px] font-medium text-[#5F665F] bg-white/90 px-2.5 py-1 rounded-md shadow-sm">
                    Haltu / Kolkata 700078
                  </span>
                </div>

                {/* Central Pin */}
                <div className="relative z-10 self-center flex flex-col items-center animate-pulse">
                  <div className="w-10 h-10 rounded-full bg-[#171817] text-white flex items-center justify-center shadow-lg border-2 border-white">
                    <MapPin className="w-5 h-5 text-[#7C927F]" />
                  </div>
                  <span className="mt-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#171817] text-white shadow-md">
                    Lenus Specialty Clinic
                  </span>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] text-[#586B5A] bg-white/90 px-2.5 py-1 rounded-md font-medium shadow-sm">
                    Near Lenskart Showroom
                  </span>
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#171817] underline font-semibold flex items-center gap-1 bg-white/90 px-2.5 py-1 rounded-md shadow-sm hover:text-[#586B5A]"
                  >
                    Open Live Maps
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#171817]/10 flex items-center justify-between text-xs text-[#5F665F]">
              <span>Accessible by auto, bus, or private vehicle</span>
              <span className="font-semibold text-[#171817]">West Bengal, PIN 700078</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
