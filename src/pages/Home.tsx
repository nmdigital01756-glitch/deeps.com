import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Sparkles, Tag, Users, ChevronRight, MapPin, Phone } from "lucide-react";
import { products, reviews } from "@/data/index";
import storeExterior from "@assets/WhatsApp_Image_2026-06-09_at_11.01.28_AM_(1)_1780983185135.jpeg";
import storeInterior from "@assets/WhatsApp_Image_2026-06-09_at_11.01.28_AM_1780983185136.jpeg";

function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return { count, ref };
}

function FadeIn({
  children,
  className = "",
  delay = 0,
  y = 30,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const categoryImages = {
  Jeans: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
  Shirts: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
  "T-Shirts": "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=600&q=80",
  "New Arrivals": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80",
};

const whyChooseUs = [
  {
    icon: Shield,
    title: "Premium Quality",
    desc: "Every item is sourced from trusted manufacturers ensuring lasting quality and comfort.",
  },
  {
    icon: Sparkles,
    title: "Trendy Designs",
    desc: "Stay ahead of fashion with our regularly updated collection of the latest styles.",
  },
  {
    icon: Tag,
    title: "Affordable Pricing",
    desc: "Premium fashion doesn't have to break the bank — our prices are always fair.",
  },
  {
    icon: Users,
    title: "Trusted By Customers",
    desc: "Over 1000+ happy customers and 96+ verified reviews speak for our credibility.",
  },
];

const trendingProducts = products.filter((p) => p.badge).slice(0, 8);

export default function Home() {
  const reviews96 = useCounter(96);
  const rating = useCounter(48);
  const customers = useCounter(1000);

  const topReviews = reviews.slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
        }}
        data-testid="hero-section"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#2563EB]/50 text-[#2563EB] backdrop-blur-sm bg-[#2563EB]/10"
            >
              New Collection 2025
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-['Poppins'] font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6"
            >
              Premium Men&apos;s
              <span className="block text-[#2563EB]">Fashion</span>
              Collection
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-lg text-gray-300 mb-10 leading-relaxed max-w-lg"
            >
              Discover stylish jeans, shirts &amp; t-shirts designed for the modern
              man. Premium quality, unbeatable prices — right here in Falna.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/products" data-testid="hero-explore-btn">
                <button className="group flex items-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-3.5 rounded-lg transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] text-sm tracking-wide">
                  Explore Collection
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact" data-testid="hero-contact-btn">
                <button className="flex items-center gap-2 border border-white/30 hover:border-white/70 text-white font-semibold px-8 py-3.5 rounded-lg transition-all text-sm tracking-wide backdrop-blur-sm hover:bg-white/10">
                  Contact Us
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex items-center gap-6 mt-12"
            >
              <div className="text-center">
                <div className="font-['Poppins'] font-bold text-2xl text-white">96+</div>
                <div className="text-xs text-gray-400 mt-0.5">Reviews</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="font-['Poppins'] font-bold text-2xl text-white">4.8</div>
                <div className="text-xs text-gray-400 mt-0.5">Rating</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="font-['Poppins'] font-bold text-2xl text-white">1000+</div>
                <div className="text-xs text-gray-400 mt-0.5">Customers</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="py-20 bg-[#F5F5F5]" data-testid="categories-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest">Browse</span>
              <h2 className="font-['Poppins'] font-bold text-3xl sm:text-4xl text-[#111111] mt-2">
                Featured Categories
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {Object.entries(categoryImages).map(([name, img], i) => (
              <FadeIn key={name} delay={i * 0.1}>
                <Link href="/collections" data-testid={`category-card-${name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[3/4]">
                    <img
                      src={img}
                      alt={name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <h3 className="font-['Poppins'] font-bold text-white text-lg sm:text-xl">
                        {name}
                      </h3>
                      <div className="flex items-center gap-1 text-[#2563EB] text-xs mt-1 font-medium group-hover:gap-2 transition-all">
                        Shop Now <ChevronRight size={13} />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING PRODUCTS */}
      <section className="py-20 bg-white" data-testid="trending-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-end justify-between mb-14">
              <div>
                <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest">Hot Right Now</span>
                <h2 className="font-['Poppins'] font-bold text-3xl sm:text-4xl text-[#111111] mt-2">
                  Trending Products
                </h2>
              </div>
              <Link href="/products" data-testid="view-all-btn">
                <button className="hidden sm:flex items-center gap-2 text-[#2563EB] text-sm font-semibold hover:gap-3 transition-all">
                  View All <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {trendingProducts.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.07}>
                <div
                  data-testid={`product-card-${product.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-[#2563EB] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-['Poppins'] font-bold text-[#111111] text-sm leading-tight mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#111111]">
                        &#8377;{product.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-gray-400 line-through">
                        &#8377;{product.originalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* STATS COUNTER */}
      <section className="py-20 bg-[#111111]" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div ref={reviews96.ref} data-testid="counter-reviews">
              <div className="font-['Poppins'] font-bold text-5xl sm:text-6xl text-[#2563EB] mb-3">
                {reviews96.count}+
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-widest font-medium">
                Verified Reviews
              </div>
              <div className="flex justify-center mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400 mx-0.5" />
                ))}
              </div>
            </div>
            <div ref={rating.ref} data-testid="counter-rating">
              <div className="font-['Poppins'] font-bold text-5xl sm:text-6xl text-[#2563EB] mb-3">
                {(rating.count / 10).toFixed(1)}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-widest font-medium">
                Average Rating
              </div>
              <div className="text-gray-500 text-xs mt-2">Out of 5.0</div>
            </div>
            <div ref={customers.ref} data-testid="counter-customers">
              <div className="font-['Poppins'] font-bold text-5xl sm:text-6xl text-[#2563EB] mb-3">
                {customers.count.toLocaleString("en-IN")}+
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-widest font-medium">
                Happy Customers
              </div>
              <div className="text-gray-500 text-xs mt-2">And growing every day</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#F5F5F5]" data-testid="why-us-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest">Our Promise</span>
              <h2 className="font-['Poppins'] font-bold text-3xl sm:text-4xl text-[#111111] mt-2">
                Why Choose Us
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-7 shadow-md hover:shadow-xl transition-shadow group">
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#2563EB] transition-colors">
                    <item.icon
                      size={22}
                      className="text-[#2563EB] group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-[#111111] text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORE */}
      <section className="py-20 bg-[#111111]" data-testid="our-store-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest">
                Come See Us
              </span>
              <h2 className="font-['Poppins'] font-bold text-3xl sm:text-4xl text-white mt-2">
                Visit Our Store in Falna
              </h2>
              <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
                Walk in and discover our full collection — premium jeans, shirts,
                t-shirts and accessories all under one roof.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Store Exterior */}
            <FadeIn delay={0.1}>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  src={storeExterior}
                  alt="UMANFORCEFALNA store front in Falna"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-flex items-center gap-1.5 bg-[#2563EB] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-3">
                    <MapPin size={11} />
                    Our Storefront
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-white text-xl mb-1">
                    Find Us at Falna
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Punjab National Bank Ke Saamne, SPU College Road, Falna, Rajasthan
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Store Interior */}
            <FadeIn delay={0.2}>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  src={storeInterior}
                  alt="UMANFORCEFALNA store interior with full collection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-flex items-center gap-1.5 bg-[#2563EB] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-3">
                    <Sparkles size={11} />
                    Huge Collection
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-white text-xl mb-1">
                    Hundreds of Styles In Store
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Jeans, shirts, t-shirts, and accessories — all stocked and ready for you
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Call to action strip */}
          <FadeIn delay={0.3}>
            <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#2563EB]/20 rounded-full flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[#2563EB]" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Call before you visit</div>
                  <div className="text-gray-400 text-xs mt-0.5">We&apos;re open Mon–Sun, 9 AM – 9 PM</div>
                </div>
              </div>
              <div className="flex gap-3 flex-wrap justify-center">
                <a
                  href="tel:+918955609429"
                  data-testid="store-call-btn-1"
                  className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
                >
                  +91 89556 09429
                </a>
                <a
                  href="tel:+917742517781"
                  data-testid="store-call-btn-2"
                  className="border border-white/20 hover:border-white/50 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
                >
                  +91 77425 17781
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CUSTOMER REVIEWS HIGHLIGHT */}
      <section className="py-20 bg-white" data-testid="reviews-highlight-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-end justify-between mb-14">
              <div>
                <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest">What They Say</span>
                <h2 className="font-['Poppins'] font-bold text-3xl sm:text-4xl text-[#111111] mt-2">
                  Customer Reviews
                </h2>
              </div>
              <Link href="/reviews" data-testid="all-reviews-btn">
                <button className="hidden sm:flex items-center gap-2 text-[#2563EB] text-sm font-semibold hover:gap-3 transition-all">
                  All Reviews <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topReviews.map((review, i) => (
              <FadeIn key={review.id} delay={i * 0.12}>
                <div
                  data-testid={`review-card-${review.id}`}
                  className="bg-[#F5F5F5] rounded-xl p-6 border border-gray-200 hover:border-[#2563EB]/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center text-white text-xs font-bold">
                      {review.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-[#111111] text-sm">{review.name}</div>
                      <div className="text-xs text-gray-400">{review.date}</div>
                    </div>
                    {review.verified && (
                      <span className="ml-auto text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        data-testid="cta-banner"
      >
        <div className="absolute inset-0 bg-[#2563EB]/90" />
        <FadeIn className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-['Poppins'] font-bold text-4xl sm:text-5xl text-white mb-5">
            Ready to Upgrade Your Style?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Visit us at Falna or call now. New arrivals every week — fresh styles, premium quality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" data-testid="cta-shop-btn">
              <button className="bg-white text-[#2563EB] font-bold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition-colors text-sm tracking-wide">
                Shop Now
              </button>
            </Link>
            <a href="tel:+918955609429" data-testid="cta-call-btn">
              <button className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-sm tracking-wide">
                Call Us: 89556 09429
              </button>
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
