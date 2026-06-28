import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi, I'm ${form.name} (${form.phone}). ${form.message}`
    );
    window.open(`https://wa.me/918955609429?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="pt-16">
      {/* PAGE HERO */}
      <section
        className="relative py-24 flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        data-testid="contact-hero"
      >
        <div className="absolute inset-0 bg-[#111111]/82" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#2563EB] text-xs font-bold uppercase tracking-widest"
          >
            Reach Out
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-['Poppins'] font-bold text-4xl sm:text-5xl text-white mt-3"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-gray-300 mt-4 text-lg max-w-lg mx-auto"
          >
            Visit us in Falna or get in touch — we&apos;re always happy to help
          </motion.p>
        </div>
      </section>

      {/* QUICK CONTACT CARDS */}
      <section className="py-14 bg-[#F5F5F5]" data-testid="contact-cards-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <FadeIn delay={0}>
              <div className="bg-white rounded-xl p-7 text-center shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone size={22} className="text-[#2563EB]" />
                </div>
                <h3 className="font-['Poppins'] font-bold text-[#111111] mb-3">Call Us</h3>
                <a
                  href="tel:+918955609429"
                  data-testid="call-btn-1"
                  className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors font-medium py-1"
                >
                  +91 89556 09429
                </a>
                <a
                  href="tel:+917742517781"
                  data-testid="call-btn-2"
                  className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors font-medium py-1"
                >
                  +91 77425 17781
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl p-7 text-center shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin size={22} className="text-[#2563EB]" />
                </div>
                <h3 className="font-['Poppins'] font-bold text-[#111111] mb-3">Visit Store</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Punjab National Bank Ke Saamne,
                  <br />
                  SPU College Road, Falna,
                  <br />
                  Rajasthan, India
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl p-7 text-center shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock size={22} className="text-[#2563EB]" />
                </div>
                <h3 className="font-['Poppins'] font-bold text-[#111111] mb-3">Store Hours</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Monday – Saturday</div>
                  <div className="font-semibold text-[#111111]">9:00 AM – 9:00 PM</div>
                  <div>Sunday</div>
                  <div className="font-semibold text-[#111111]">10:00 AM – 7:00 PM</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* MAP + FORM */}
      <section className="py-16 bg-white" data-testid="map-form-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* MAP */}
            <FadeIn>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-video lg:aspect-auto lg:h-full min-h-72">
                <iframe
                  title="UMANFORCEFALNA Store Location"
                  src="https://maps.google.com/maps?q=Falna+Rajasthan+India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 300 }}
                  allowFullScreen
                  loading="lazy"
                  data-testid="store-map"
                />
              </div>
            </FadeIn>

            {/* CONTACT FORM */}
            <FadeIn delay={0.15}>
              <div className="bg-[#F5F5F5] rounded-2xl p-8 sm:p-10">
                <h2 className="font-['Poppins'] font-bold text-2xl text-[#111111] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-500 text-sm mb-7">
                  Fill in your details and we&apos;ll connect with you on WhatsApp.
                </p>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 text-sm mb-6"
                  >
                    Message sent! We&apos;ll get back to you on WhatsApp shortly.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      data-testid="input-name"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      data-testid="input-phone"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      data-testid="input-message"
                      placeholder="Ask about a product, check availability, or say hello..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    data-testid="btn-submit-contact"
                    className="w-full bg-[#111111] hover:bg-[#2563EB] text-white font-semibold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <Send size={15} />
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHATSAPP DIRECT CTA */}
      <section className="py-14 bg-[#111111]" data-testid="whatsapp-cta-section">
        <FadeIn className="max-w-2xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
              <FaWhatsapp size={28} className="text-white" />
            </div>
          </div>
          <h2 className="font-['Poppins'] font-bold text-2xl text-white mb-3">
            Chat With Us on WhatsApp
          </h2>
          <p className="text-gray-400 text-sm mb-7">
            For fastest response, reach us directly on WhatsApp. We typically
            reply within minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/918955609429"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="wa-btn-1"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={16} />
              +91 89556 09429
            </a>
            <a
              href="https://wa.me/917742517781"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="wa-btn-2"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={16} />
              +91 77425 17781
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
