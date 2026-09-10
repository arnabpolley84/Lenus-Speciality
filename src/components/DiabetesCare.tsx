import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CARE_AREAS } from '../data/clinicData';

interface DiabetesCareProps {
  onOpenBooking: () => void;
}

export default function DiabetesCare({ onOpenBooking }: DiabetesCareProps) {
  const [activeArea, setActiveArea] = useState<string>(CARE_AREAS[0].id);

  return (
    <section id="care" className="py-24 sm:py-32 lg:py-40 bg-[#F5F3EE] text-[#171817]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#5F665F] block mb-4">
            DIABETES CARE
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] leading-[1.12] text-[#171817]">
            Understand your health.{' '}
            <span className="block font-normal italic text-[#586B5A]">
              Take control of what comes next.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#5F665F] font-light max-w-2xl leading-relaxed">
            Every aspect of your diabetes journey is addressed with clinical precision, clear guidance, and compassionate partnership.
          </p>
        </div>

        {/* Editorial Stacked Layout */}
        <div className="space-y-4">
          {CARE_AREAS.map((area, index) => {
            const isActive = activeArea === area.id;

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onMouseEnter={() => setActiveArea(area.id)}
                onClick={() => setActiveArea(area.id)}
                className={`group cursor-pointer rounded-2xl p-6 sm:p-10 transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#EDEAE1] border-[#171817]/15 shadow-sm'
                    : 'bg-[#FAF9F5] border-transparent hover:border-[#171817]/10 hover:bg-[#F0EDE6]'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  {/* Big Number & Title */}
                  <div className="lg:col-span-5 flex items-baseline gap-6 sm:gap-8">
                    <span
                      className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tighter transition-colors duration-300 ${
                        isActive ? 'text-[#586B5A] font-normal' : 'text-[#171817]/30 group-hover:text-[#171817]/60'
                      }`}
                    >
                      {area.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-[#171817] group-hover:translate-x-1.5 transition-transform duration-300">
                      {area.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-5">
                    <p className="text-sm sm:text-base text-[#5F665F] font-light leading-relaxed">
                      {area.description}
                    </p>

                    {/* Focus Pills */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {area.focus.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/70 text-[#3C403C] border border-[#171817]/5"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#7C927F]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Arrow Indicator & Action */}
                  <div className="lg:col-span-2 flex lg:justify-end items-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenBooking();
                      }}
                      className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-4 py-2.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'bg-[#171817] text-white shadow'
                          : 'text-[#171817] opacity-60 group-hover:opacity-100 group-hover:translate-x-1'
                      }`}
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
