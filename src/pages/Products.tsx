import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, ShoppingBag, Eye } from "lucide-react";
import { products, type Product } from "@/data/index";

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

const categories = ["All", "Jeans", "Shirts", "T-Shirts", "Accessories"] as const;
type FilterCategory = typeof categories[number];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest First", value: "newest" },
] as const;
type SortOption = typeof sortOptions[number]["value"];

function QuickView({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="bg-white rounded-2xl overflow-hidden w-full max-w-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        data-testid="quick-view-modal"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="relative aspect-square sm:aspect-auto sm:h-full min-h-64">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-[#2563EB] text-white text-xs font-bold px-3 py-1 rounded-full">
                {product.badge}
              </span>
            )}
          </div>
          <div className="p-7 flex flex-col justify-between">
            <div>
              <button
                onClick={onClose}
                data-testid="quick-view-close"
                className="absolute top-4 right-4 sm:relative sm:top-auto sm:right-auto ml-auto flex bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 items-center justify-center transition-colors"
              >
                <X size={16} />
              </button>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                {product.category}
              </p>
              <h2 className="font-['Poppins'] font-bold text-xl text-[#111111] mb-3">
                {product.name}
              </h2>

              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={
                      i < 4
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-yellow-400 fill-yellow-200"
                    }
                  />
                ))}
                <span className="text-xs text-gray-400 ml-1">4.8 (96 reviews)</span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {product.description}
              </p>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-['Poppins'] font-bold text-2xl text-[#111111]">
                  &#8377;{product.price.toLocaleString("en-IN")}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  &#8377;{product.originalPrice.toLocaleString("en-IN")}
                </span>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                  {discount}% off
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="tel:+918955609429"
                className="w-full flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                data-testid="quick-view-buy-btn"
              >
                <ShoppingBag size={16} />
                Enquire Now — Call Us
              </a>
              <p className="text-xs text-center text-gray-400">
                Visit store or call: +91 89556 09429
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Products() {
  const [filter, setFilter] = useState<FilterCategory>("All");
  const [sort, setSort] = useState<SortOption>("featured");
  const [quickView, setQuickView] = useState<Product | null>(null);

  const filtered = products.filter((p) =>
    filter === "All" ? true : p.category === filter
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "newest") return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    return 0;
  });

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
        data-testid="products-hero"
      >
        <div className="absolute inset-0 bg-[#111111]/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#2563EB] text-xs font-bold uppercase tracking-widest"
          >
            Explore
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-['Poppins'] font-bold text-4xl sm:text-5xl text-white mt-3"
          >
            All Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-gray-300 mt-4 text-lg max-w-lg mx-auto"
          >
            Premium men&apos;s fashion for every style and every occasion
          </motion.p>
        </div>
      </section>

      <section className="py-14 bg-white" data-testid="products-grid-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters & Sort */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-2" data-testid="product-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    filter === cat
                      ? "bg-[#111111] text-white shadow-md"
                      : "bg-[#F5F5F5] text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-500 whitespace-nowrap">Sort by:</label>
              <select
                data-testid="sort-select"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#111111]"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-8">
            Showing <span className="font-semibold text-[#111111]">{sorted.length}</span> products
          </p>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {sorted.map((product, i) => (
              <FadeIn key={product.id} delay={Math.min(i * 0.05, 0.35)}>
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
                      <span className="absolute top-3 left-3 bg-[#2563EB] text-white text-xs font-bold px-2.5 py-1 rounded-full z-10">
                        {product.badge}
                      </span>
                    )}
                    <div className="absolute inset-0 bg-[#111111]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button
                        onClick={() => setQuickView(product)}
                        data-testid={`quick-view-btn-${product.id}`}
                        className="bg-white text-[#111111] rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-[#2563EB] hover:text-white transition-colors"
                        aria-label={`Quick view ${product.name}`}
                      >
                        <Eye size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-['Poppins'] font-bold text-[#111111] text-sm leading-tight mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-bold text-[#111111]">
                        &#8377;{product.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-gray-400 line-through">
                        &#8377;{product.originalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <button
                      onClick={() => setQuickView(product)}
                      data-testid={`add-to-cart-${product.id}`}
                      className="w-full bg-[#111111] hover:bg-[#2563EB] text-white text-xs font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingBag size={13} />
                      Enquire Now
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {quickView && (
          <QuickView product={quickView} onClose={() => setQuickView(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
