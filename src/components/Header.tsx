import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#approach' },
    { label: 'Diabetes Care', href: '#care' },
    { label: 'Dr. Anirban Chakraborty', href: '#doctor' },
    { label: 'Patient Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#171817]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-sm text-white'
            : 'bg-gradient-to-b from-[#171817]/80 via-[#171817]/40 to-transparent py-6 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Mark */}
          <a
            href="#"
            className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C927F]"
            aria-label="Lenus Specialty Clinic Home"
          >
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-widest text-lg sm:text-xl uppercase transition-colors text-white">
                LENUS
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#D8D8D0] font-light">
                SPECIALTY CLINIC
              </span>
            </div>
            <span className="text-[10px] text-[#A6AEA6] font-bengali font-normal tracking-wide mt-0.5">
              লেনাস স্পেশ্যালটি ক্লিনিক • কলকাতা
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide text-[#E3E0D6] hover:text-white transition-colors duration-200 relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C927F] rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Quick Phone */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="text-xs uppercase tracking-wider font-semibold text-[#D8D8D0] hover:text-white transition-colors flex items-center gap-1.5 px-2 py-2"
              title="Direct Clinic Phone"
            >
              <Phone className="w-3.5 h-3.5 text-[#7C927F]" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            <button
              id="header-book-btn"
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#FAF9F5] text-[#171817] hover:bg-[#EAE7DF] transition-all duration-300 shadow-sm hover:shadow active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C927F]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-40 bg-[#171817] text-white flex flex-col pt-24 px-8 pb-10 transition-all duration-300 lg:hidden overflow-y-auto"
        >
          <div className="flex flex-col space-y-6 flex-1 justify-center">
            <div className="pb-4 border-b border-white/10">
              <p className="text-xs uppercase tracking-widest text-[#A6AEA6]">LENUS SPECIALTY CLINIC</p>
              <p className="text-sm text-white/80 font-bengali mt-1">লেনাস স্পেশ্যালটি ক্লিনিক</p>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-light tracking-tight text-[#FAF9F5] hover:text-[#7C927F] transition-colors py-2 flex items-center justify-between border-b border-white/5"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-white/40" />
                </a>
              ))}
            </nav>

            <div className="pt-6 flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-4 rounded-full text-center text-sm uppercase tracking-widest font-semibold bg-[#FAF9F5] text-[#171817] flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="w-full py-3.5 rounded-full text-center text-sm tracking-wider font-medium border border-white/20 text-white flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#7C927F]" />
                Call {CLINIC_INFO.phone}
              </a>
            </div>
          </div>

          <div className="pt-8 text-xs text-[#A6AEA6] border-t border-white/10 flex flex-col gap-1">
            <p className="text-white/90">801, Kalikapur Road, Kolkata 700078</p>
            <p>Diabetology & Human-Centered Diabetes Care</p>
          </div>
        </div>
      )}
    </>
  );
}
