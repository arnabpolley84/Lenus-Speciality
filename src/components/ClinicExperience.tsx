import { motion } from 'motion/react';
import clinicImg from '../assets/images/clinic_storytelling_1789057961431.jpg';

export default function ClinicExperience() {
  const facets = [
    {
      title: 'Diabetes Consultation',
      desc: 'In-depth clinical discussions to examine medical history, symptomatology, and lifestyle context.',
    },
    {
      title: 'Blood Sugar Management',
      desc: 'Calibrated glycemic strategies aimed at stabilizing daily glucose curves and reducing variability.',
    },
    {
      title: 'Lifestyle & Nutrition Guidance',
      desc: 'Culturally relevant meal guidance and movement plans adapted to practical daily life in Kolkata.',
    },
    {
      title: 'Long-Term Monitoring',
      desc: 'Systematic evaluations to assess organ vitality, prevent complications, and adjust treatment protocols.',
    },
    {
      title: 'Personalized Care',
      desc: 'Individualized medical interventions recognizing your distinct physiological and personal priorities.',
    },
    {
      title: 'Preventive Health Guidance',
      desc: 'Proactive measures to protect cardiovascular, renal, and ocular wellbeing over decades of life.',
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#EDEAE1] text-[#171817] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#5F665F] block mb-4">
            THE CLINIC EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.02em] text-[#171817] leading-[1.15]">
            Care that looks at the{' '}
            <span className="font-normal italic text-[#586B5A]">bigger picture.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#5F665F] font-light leading-relaxed">
            Lenus Specialty Clinic was founded to provide patient-centered diabetology where consultations are never rushed. We look comprehensively at how your metabolism, habits, and overall wellbeing interact.
          </p>
        </div>

        {/* Large Editorial Image + Content Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image with subtle fade and clean framing */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#171817]">
              <img
                src={clinicImg}
                alt="Patient consultation at Lenus Specialty Clinic in Kolkata"
                className="w-full aspect-[4/3] sm:aspect-[16/11] object-cover filter brightness-[0.96] transition-transform duration-700 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171817]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs sm:text-sm font-light flex items-center justify-between">
                <span>Thoughtful Consultation Environment</span>
                <span className="text-white/60">Kalikapur, Kolkata</span>
              </div>
            </div>
          </motion.div>

          {/* Editorial Facets (Not boring cards, but clean editorial typography with dividers) */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-[#171817]/10">
            {facets.map((facet, idx) => (
              <motion.div
                key={facet.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="py-5 sm:py-6 first:pt-0 last:pb-0 group"
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="text-lg sm:text-xl font-medium tracking-tight text-[#171817] group-hover:text-[#586B5A] transition-colors">
                    {facet.title}
                  </h3>
                  <span className="text-xs font-mono text-[#5F665F]/60">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#5F665F] font-light leading-relaxed">
                  {facet.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
