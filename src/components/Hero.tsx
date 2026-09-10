import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, MapPin, ChevronDown } from 'lucide-react';
import localHeroFallback from '../assets/images/clinic_hero_custom.jpg';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

const HERO_IMAGE_URL =
  'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnB9zSAvrSYVMCdHV_1UEs5ZcGHVWgDvYG0DF7D7iX938hysvK65DC720nCdcEcHakTi9hb3_gfg6o-yXF54_L2HbdGFKQKWTXJSth29BYzhQsvGIxwlPVO9PfymoJ4MO4gNCFX=s1600';
const HERO_IMAGE_FALLBACK =
  'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnB9zSAvrSYVMCdHV_1UEs5ZcGHVWgDvYG0DF7D7iX938hysvK65DC720nCdcEcHakTi9hb3_gfg6o-yXF54_L2HbdGFKQKWTXJSth29BYzhQsvGIxwlPVO9PfymoJ4MO4gNCFX=s322-k-no';

export default function Hero({ onOpenBooking }: HeroProps) {
  const [imgSrc, setImgSrc] = useState(HERO_IMAGE_URL);

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center justify-start overflow-hidden bg-[#171817]"
    >
      {/* Immersive Background Image Container: Positioned in Right Section on Desktop */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        {/* Doctor Image - Anchored to the Right Section */}
        <div className="absolute top-0 right-0 w-full lg:w-[62%] h-full">
          <img
            src={imgSrc}
            onError={() => {
              if (imgSrc === HERO_IMAGE_URL) {
                setImgSrc(HERO_IMAGE_FALLBACK);
              } else if (imgSrc === HERO_IMAGE_FALLBACK) {
                setImgSrc(localHeroFallback);
              }
            }}
            alt="Dr. Anirban Chakraborty, Diabetologist at Lenus Specialty Clinic in Kolkata"
            className="w-full h-full object-cover object-[center_28%] lg:object-[25%_25%] scale-x-[-1] filter brightness-100 contrast-[1.04]"
            referrerPolicy="no-referrer"
          />

          {/* Left blend: Seamless gradient melting from the left dark text zone into the doctor image */}
          <div className="absolute inset-y-0 left-0 w-32 sm:w-48 lg:w-80 bg-gradient-to-r from-[#171817] via-[#171817]/70 to-transparent pointer-events-none" />

          {/* Top header protection */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#171817]/75 to-transparent pointer-events-none" />

          {/* Subtle right edge softening */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#171817]/30 to-transparent pointer-events-none" />
        </div>

        {/* Mobile backdrop scrim (only on small screens so text stays readable over full-width image) */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#171817] via-[#171817]/75 to-[#171817]/40 pointer-events-none" />

        {/* Atmospheric Bottom Melt fading gradually into page background #F5F3EE */}
        <div className="absolute inset-x-0 bottom-0 h-36 sm:h-52 lg:h-64 bg-gradient-to-t from-[#F5F3EE] via-[#F5F3EE]/80 to-transparent pointer-events-none" />
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-24 lg:py-40 w-full flex flex-col justify-between min-h-[85vh]">
        <div className="max-w-2xl lg:max-w-[54%]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#7C927F] animate-pulse" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#E3E0D6]">
              LENUS SPECIALTY CLINIC
            </span>
            <span className="text-white/30 text-xs">|</span>
            <span className="text-[11px] sm:text-xs text-[#C6CDC6] font-bengali tracking-wide">
              {CLINIC_INFO.bengaliName}
            </span>
          </motion.div>

          {/* Large Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[42px] leading-[1.08] sm:text-6xl md:text-7xl lg:text-[84px] font-medium tracking-[-0.03em] text-[#FAF9F5] mb-6 sm:mb-8"
          >
            Better Diabetes Care.
            <br />
            <span className="text-[#A4B5A6] font-light italic">
              Built Around You.
            </span>
          </motion.h1>

          {/* Supporting Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-[#D8D8D0] font-light leading-relaxed max-w-2xl mb-10 sm:mb-12"
          >
            Personalized diabetes care focused on understanding your health,
            managing your condition, and helping you live better every day. Led by
            Diabetologist{' '}
            <span className="text-white font-normal underline decoration-[#7C927F]/60 underline-offset-4">
              {CLINIC_INFO.doctor.name}
            </span>{' '}
            in Kalikapur, Kolkata.
          </motion.p>

          {/* Call-to-Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            <button
              id="hero-book-cta"
              onClick={onOpenBooking}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold bg-[#FAF9F5] text-[#171817] hover:bg-[#EAE7DF] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-black/20"
            >
              <span>Book An Appointment</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              id="hero-explore-cta"
              href="#approach"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs sm:text-sm uppercase tracking-[0.16em] font-medium text-[#FAF9F5] border border-white/25 hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Our Care
            </a>
          </motion.div>
        </div>

        {/* Hero Bottom Credibility Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="pt-12 sm:pt-16 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 text-xs sm:text-sm text-[#D8D8D0]"
        >
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="flex text-[#E5B54F]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-white">4.8 / 5</span>
              <span className="text-white/60">({CLINIC_INFO.doctor.rating.totalReviews}+ patient reviews)</span>
            </div>

            <span className="hidden sm:inline text-white/30">•</span>

            <div className="flex items-center gap-1.5 text-white/80">
              <MapPin className="w-3.5 h-3.5 text-[#7C927F]" />
              <span>Kalikapur Road, Kolkata</span>
            </div>
          </div>

          <a
            href="#approach"
            className="hidden md:flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs uppercase tracking-widest"
          >
            <span>Scroll to Discover</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>

        {/* Editorial Doctor Attribution Badge in the Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="hidden xl:flex items-center gap-3.5 px-5 py-3 rounded-full bg-[#171817]/75 backdrop-blur-md border border-white/15 text-white shadow-2xl absolute right-8 bottom-32 z-20 pointer-events-none"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#7C927F] animate-pulse" />
          <div className="text-left">
            <p className="text-xs font-semibold text-white tracking-wide">Dr. Anirban Chakraborty</p>
            <p className="text-[11px] text-[#B8C2B8] font-light">Diabetologist • Lenus Specialty Clinic</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
