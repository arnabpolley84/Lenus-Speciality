import { motion } from 'motion/react';
import { CLINIC_PRINCIPLES } from '../data/clinicData';

export default function WhyLenus() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-[#F5F3EE] text-[#171817]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#5F665F] block mb-4">
            OUR PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#171817] leading-[1.15]">
            Why patients choose{' '}
            <span className="font-normal italic text-[#586B5A]">Lenus.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#5F665F] font-light max-w-xl">
            Five core clinical tenets defining our patient relationships and every treatment recommendation we make.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {CLINIC_PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-8 sm:p-10 rounded-3xl bg-[#FAF9F5] border border-[#171817]/10 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 ${
                index === 0 ? 'md:col-span-2 lg:col-span-2 bg-[#EDEAE1]' : ''
              }`}
            >
              <div>
                <span className="text-4xl sm:text-5xl font-light tracking-tighter text-[#586B5A] block mb-6">
                  {principle.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#171817] mb-4">
                  {principle.title}
                </h3>
                <p className="text-base sm:text-lg text-[#5F665F] font-light leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#171817]/10 flex items-center justify-between text-xs text-[#5F665F]/80">
                <span>Standard of Practice</span>
                <span className="font-mono">P-{principle.number}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
