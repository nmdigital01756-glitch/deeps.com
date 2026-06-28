import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { products, type Category } from "@/data/index";

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

const tabs: { label: string; value: Category | "All" | "New Arrivals" | "Best Sellers" }[] = [
  { label: "All", value: "All" },
  { label: "Jeans", value: "Jeans" },
  { label: "Shirts", value: "Shirts" },
  { label: "T-Shirts", value: "T-Shirts" },
  { label: "New Arrivals", value: "New Arrivals" },
  { label: "Best Sellers", value: "Best Sellers" },
  { label: "Accessories", value: "Accessories" },
];

const collectionBanners: Record<string, { image: string; desc: string }> = {
  Jeans: {
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=1200&q=80",
    desc: "From slim fits to cargo cuts — find your perfect pair.",
  },
  Shirts: {
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1200&q=80",
    desc: "Crisp formals, relaxed casuals, bold prints — shirts for every mood.",
  },
  "T-Shirts": {
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=1200&q=80",
    desc: "Premium cotton tees, polos, and graphic prints for everyday wear.",
  },
  Accessories: {
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80",
    desc: "Belts, caps, sunglasses and more to complete your look.",
  },
};

export default function Collections() {
  const [active, setActive] = useState<string>("All");

  const filtered = products.filter((p) => {
    if (active === "All") return true;
    if (active === "New Arrivals") return p.isNew;
    if (active === "Best Sellers") return p.badge === "Best Seller";
    return p.category === active;
  });

  const banner = collectionBanners[active as Category];

  return (
    <div className="pt-16">
      {/* PAGE HERO */}
      <section
        className="relative py-24 flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        data-testid="collections-hero"
      >
        <div className="absolute inset-0 bg-[#111111]/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#2563EB] text-xs font-bold uppercase tracking-widest"
          >
            Browse
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-['Poppins'] font-bold text-4xl sm:text-5xl text-white mt-3"
          >
            Our Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-gray-300 mt-4 text-lg max-w-lg mx-auto"
          >
            Curated men&apos;s fashion across every style and occasion
          </motion.p>
        </div>
      </section>

      {/* COLLECTION BANNER (conditional) */}
      {banner && (
        <FadeIn>
          <div className="relative h-48 sm:h-64 overflow-hidden">
            <img
              src={banner.image}
              alt={active}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#111111]/70 flex flex-col items-center justify-center text-center px-4">
              <h2 className="font-['Poppins'] font-bold text-2xl sm:text-3xl text-white">
                {active}
              </h2>
              <p className="text-gray-300 mt-2 text-sm max-w-md">{banner.desc}</p>
            </div>
          </div>
        </FadeIn>
      )}

      {/* TABS + GRID */}
      <section className="py-16 bg-white" data-testid="collections-grid-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-10" data-testid="collection-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                data-testid={`tab-${tab.value.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActive(tab.value)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  active === tab.value
                    ? "bg-[#111111] text-white shadow-md"
                    : "bg-[#F5F5F5] text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-400 mb-8">
            Showing <span className="font-semibold text-[#111111]">{filtered.length}</span> items
          </p>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filtered.map((product, i) => (
              <FadeIn key={product.id} delay={Math.min(i * 0.06, 0.4)}>
                <Link href="/products" data-testid={`collection-product-${product.id}`}>
                  <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer">
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
                      <div className="absolute inset-0 bg-[#111111]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-xs font-semibold flex items-center gap-1">
                          View Details <ChevronRight size={13} />
                        </span>
                      </div>
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
                        <span className="ml-auto text-xs text-green-600 font-semibold">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
