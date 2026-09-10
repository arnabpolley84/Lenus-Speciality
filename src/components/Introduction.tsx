import { motion } from 'motion/react';
import { ArrowUpRight, Activity, Heart, ShieldCheck } from 'lucide-react';

export default function Introduction() {
  return (
    <section id="approach" className="py-24 sm:py-32 lg:py-40 bg-[#F5F3EE] text-[#171817]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Eyebrow */}
        <div className="flex items-center gap-3 mb-10 sm:mb-14">
          <span className="w-8 h-[1px] bg-[#171817]/40" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#5F665F]">
            OUR APPROACH
          </span>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Big Statement Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-[58px] font-normal leading-[1.12] tracking-[-0.025em] text-[#171817]">
              Diabetes care is <br />
              <span className="italic font-light text-[#586B5A]">
                more than numbers.
              </span>
            </h2>
            <div className="mt-8 pt-8 border-t border-[#171817]/10 flex flex-wrap gap-8 text-sm text-[#5F665F]">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#7C927F]" />
                <span>Whole-Person Focus</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#7C927F]" />
                <span>Targeted Glucose Balance</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#7C927F]" />
                <span>Preventive Foresight</span>
              </div>
            </div>
          </motion.div>

          {/* Supporting Copy Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between h-full space-y-8 lg:pt-2"
          >
            <p className="text-lg sm:text-xl font-light text-[#3C403C] leading-relaxed">
              Every person is different. Your treatment, lifestyle, goals and long-term health deserve an approach that looks beyond a single reading and focuses on the whole person.
            </p>
            <p className="text-base text-[#5F665F] leading-relaxed font-normal">
              At Lenus Specialty Clinic in Kolkata, diabetes management is built upon dialogue, careful clinical evaluation, and realistic steps tailored to your daily routine. We believe in empowering you with the clarity and support needed to live confidently.
            </p>

            <div className="pt-2">
              <a
                href="#care"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#171817] hover:text-[#586B5A] transition-colors group"
              >
                <span>Discover our care areas</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
