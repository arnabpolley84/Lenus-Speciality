import { useState, useEffect, type FormEvent } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, AlertCircle, Send, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceType: 'Diabetes Consultation & Assessment',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const serviceOptions = [
    'Diabetes Consultation & Assessment',
    'Blood Sugar Management & Review',
    'Follow-up Consultation with Dr. Anirban Chakraborty',
    'Lifestyle & Nutrition Guidance',
    'Pre-diabetes & Preventive Screening',
  ];

  const timeSlots = [
    'Morning (10:00 AM - 1:00 PM)',
    'Afternoon (1:00 PM - 4:00 PM)',
    'Evening (5:00 PM - 8:00 PM)',
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#171817]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-3xl bg-[#FAF9F5] border border-[#171817]/15 shadow-2xl p-6 sm:p-10 text-[#171817] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-[#5F665F] hover:text-[#171817] hover:bg-[#EDEAE1] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C927F]"
          aria-label="Close appointment modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-8 pr-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#586B5A] block mb-1">
                LENUS SPECIALTY CLINIC
              </span>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-medium tracking-tight text-[#171817]">
                Request an Appointment
              </h2>
              <p className="text-sm text-[#5F665F] mt-1.5 font-light">
                Diabetology consultation with Dr. Anirban Chakraborty. Our desk will confirm your scheduled slot.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C403C] mb-1.5">
                  Patient Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5F665F]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#EDEAE1]/60 border border-[#171817]/15 focus:border-[#586B5A] focus:bg-white focus:outline-none text-sm transition-colors"
                  />
                </div>
              </div>

              {/* Phone Number & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C403C] mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5F665F]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 098301 23456"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#EDEAE1]/60 border border-[#171817]/15 focus:border-[#586B5A] focus:bg-white focus:outline-none text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C403C] mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#EDEAE1]/60 border border-[#171817]/15 focus:border-[#586B5A] focus:bg-white focus:outline-none text-sm transition-colors"
                  />
                </div>
              </div>

              {/* Consultation Type */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C403C] mb-1.5">
                  Consultation Focus
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#EDEAE1]/60 border border-[#171817]/15 focus:border-[#586B5A] focus:bg-white focus:outline-none text-sm transition-colors"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date & Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C403C] mb-1.5">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#EDEAE1]/60 border border-[#171817]/15 focus:border-[#586B5A] focus:bg-white focus:outline-none text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C403C] mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#EDEAE1]/60 border border-[#171817]/15 focus:border-[#586B5A] focus:bg-white focus:outline-none text-sm transition-colors"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C403C] mb-1.5">
                  Brief Medical Notes / Current Concerns
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g., Recent fasting blood sugar readings or previous diagnosis history..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#EDEAE1]/60 border border-[#171817]/15 focus:border-[#586B5A] focus:bg-white focus:outline-none text-sm transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold bg-[#171817] text-white hover:bg-[#3C403C] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-70"
                >
                  {loading ? (
                    <span>Processing request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Appointment Request</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quick direct call fallback */}
              <div className="text-center pt-2">
                <p className="text-xs text-[#5F665F]">
                  Need immediate timing confirmation? Call directly at{' '}
                  <a
                    href={`tel:${CLINIC_INFO.phoneRaw}`}
                    className="font-semibold text-[#171817] underline hover:text-[#586B5A]"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-6 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#7C927F]/20 text-[#586B5A] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#586B5A]">
                REQUEST RECEIVED
              </span>
              <h3 className="text-2xl sm:text-3xl font-medium text-[#171817] mt-1">
                Thank You, {formData.fullName}
              </h3>
              <p className="text-sm text-[#5F665F] max-w-md mx-auto mt-2 font-light">
                Your consultation request for{' '}
                <span className="font-medium text-[#171817]">{formData.serviceType}</span> with Dr. Anirban Chakraborty has been logged.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#EDEAE1] text-left text-xs sm:text-sm space-y-1.5 border border-[#171817]/10">
              <p className="font-semibold text-[#171817]">Clinic Contact Details:</p>
              <p className="text-[#5F665F]">
                Location: 801, Kalikapur Road, Next to Lenskart, Kolkata 700078
              </p>
              <p className="text-[#5F665F]">
                Phone: {CLINIC_INFO.phone}
              </p>
              <p className="text-[#586B5A] font-medium pt-1">
                Preferred slot: {formData.preferredDate || 'Earliest available'} ({formData.preferredTime})
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="flex-1 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#171817] text-white flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Clinic Desk</span>
              </a>

              <a
                href={`https://wa.me/918910902547?text=Hello%2C%20I%20requested%20an%20appointment%20for%20${encodeURIComponent(
                  formData.fullName
                )}%20for%20diabetes%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#25D366] text-white flex items-center justify-center gap-2 hover:bg-[#20ba5a]"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs uppercase tracking-widest font-semibold text-[#5F665F] hover:text-[#171817] pt-2"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
