import { motion } from "framer-motion";
import { CheckCircle, Heart, Star, Truck } from "lucide-react";
import { Link } from "wouter";

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

const values = [
  {
    icon: CheckCircle,
    title: "Premium Quality",
    desc: "We source only the best fabrics and materials, ensuring every garment stands the test of time.",
  },
  {
    icon: Star,
    title: "Trusted Excellence",
    desc: "96+ verified reviews and 4.8 stars — our customers speak for the quality we deliver.",
  },
  {
    icon: Heart,
    title: "Customer First",
    desc: "From choosing the right size to after-sales support, we put customers at the heart of everything.",
  },
  {
    icon: Truck,
    title: "Always Stocked",
    desc: "Fresh arrivals every week across jeans, shirts, t-shirts and accessories for every occasion.",
  },
];

export default function About() {
  return (
    <div className="pt-16">
      {/* PAGE HERO */}
      <section
        className="relative py-28 flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        data-testid="about-hero"
      >
        <div className="absolute inset-0 bg-[#111111]/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[#2563EB] text-xs font-bold uppercase tracking-widest"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-['Poppins'] font-bold text-4xl sm:text-5xl text-white mt-3"
          >
            About UMANFORCEFALNA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-gray-300 mt-4 max-w-xl mx-auto text-lg"
          >
            Bringing premium men&apos;s fashion to the heart of Rajasthan
          </motion.p>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="py-20 bg-white" data-testid="brand-story-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeIn>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"
                  alt="Store interior"
                  className="rounded-2xl w-full object-cover aspect-[4/3] shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#2563EB] text-white rounded-2xl p-6 shadow-xl hidden sm:block">
                  <div className="font-['Poppins'] font-bold text-3xl">96+</div>
                  <div className="text-blue-200 text-sm mt-0.5">Happy Reviews</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest">
                  Our Brand Story
                </span>
                <h2 className="font-['Poppins'] font-bold text-3xl sm:text-4xl text-[#111111] mt-3 mb-6">
                  Dressing Men With{" "}
                  <span className="text-[#2563EB]">Confidence</span> Since Day One
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  UMANFORCEFALNA started with a simple belief — every man deserves
                  access to premium fashion without paying luxury prices. Located in
                  the heart of Falna, Rajasthan, we&apos;ve built a reputation for
                  delivering quality and style that speaks for itself.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  From our carefully curated jeans and shirts to our trendy t-shirts
                  and accessories, every product in our collection is chosen to help
                  men dress with confidence for every occasion — whether it&apos;s
                  office, casual, or celebration.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div>
                    <div className="font-['Poppins'] font-bold text-3xl text-[#2563EB]">1000+</div>
                    <div className="text-gray-500 text-sm mt-1">Happy Customers</div>
                  </div>
                  <div className="w-px bg-gray-200 self-stretch" />
                  <div>
                    <div className="font-['Poppins'] font-bold text-3xl text-[#2563EB]">4.8</div>
                    <div className="text-gray-500 text-sm mt-1">Star Rating</div>
                  </div>
                  <div className="w-px bg-gray-200 self-stretch" />
                  <div>
                    <div className="font-['Poppins'] font-bold text-3xl text-[#2563EB]">60+</div>
                    <div className="text-gray-500 text-sm mt-1">Products</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-[#F5F5F5]" data-testid="mission-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest">
                What Drives Us
              </span>
              <h2 className="font-['Poppins'] font-bold text-3xl sm:text-4xl text-[#111111] mt-2">
                Mission &amp; Vision
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center mb-5">
                  <Star size={22} className="text-white" />
                </div>
                <h3 className="font-['Poppins'] font-bold text-xl text-[#111111] mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower every man in Rajasthan and beyond with access to premium,
                  on-trend fashion that looks expensive without being expensive. We
                  believe great style should be available to all — not just a few.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-[#111111] rounded-2xl p-8 shadow-md">
                <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center mb-5">
                  <Heart size={22} className="text-white" />
                </div>
                <h3 className="font-['Poppins'] font-bold text-xl text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  To become Rajasthan&apos;s most trusted men&apos;s fashion destination —
                  a store where every visit feels like discovering a new version of
                  yourself. We aim to keep growing, keep innovating, and keep
                  delivering excellence to every customer.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-white" data-testid="values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest">
                Our Principles
              </span>
              <h2 className="font-['Poppins'] font-bold text-3xl sm:text-4xl text-[#111111] mt-2">
                What We Stand For
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <FadeIn key={val.title} delay={i * 0.1}>
                <div className="text-center p-6 rounded-xl hover:bg-[#F5F5F5] transition-colors group">
                  <div className="w-14 h-14 bg-[#2563EB]/10 group-hover:bg-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors">
                    <val.icon
                      size={24}
                      className="text-[#2563EB] group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-[#111111] mb-3">
                    {val.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2563EB]" data-testid="about-cta">
        <FadeIn className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-['Poppins'] font-bold text-3xl text-white mb-4">
            Come Visit Us in Falna
          </h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">
            Punjab National Bank Ke Saamne, SPU College Road, Falna, Rajasthan.
            We&apos;d love to help you find the perfect outfit.
          </p>
          <Link href="/contact" data-testid="about-contact-btn">
            <button className="bg-white text-[#2563EB] font-bold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition-colors text-sm tracking-wide">
              Get Directions
            </button>
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
