import { motion } from 'motion/react';
import storyImg from '../assets/images/clinic_storytelling_1789057961431.jpg';

export default function VisualStorytelling() {
  return (
    <section className="relative py-32 sm:py-44 lg:py-56 w-full overflow-hidden bg-[#171817] text-white">
      {/* Immersive Background with Cinematic Fades */}
      <div className="absolute inset-0 z-0">
        <img
          src={storyImg}
          alt="Modern healthcare consultation at Lenus Specialty Clinic"
          className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Layered Gradient scrim blending top and bottom into surrounding sections */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171817] via-[#171817]/60 to-[#171817]/90" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#171817]/50 to-[#171817]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-block text-xs uppercase tracking-[0.3em] font-medium text-[#A4B5A6] px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
            THE LENUS COMMITMENT
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-light tracking-[-0.03em] leading-tight text-[#FAF9F5]">
            Healthcare should feel <br />
            <span className="italic font-normal text-[#A4B5A6]">
              deeply personal.
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-xl font-light text-[#D8D8D0] leading-relaxed pt-2">
            From your first consultation to ongoing care, every interaction should be clear, respectful and focused on what matters to you.
          </p>

          <div className="pt-6">
            <div className="w-12 h-[1px] bg-[#7C927F] mx-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
