import { motion } from "framer-motion";
import { Star, CheckCircle } from "lucide-react";
import { reviews } from "@/data/index";

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

const ratingBreakdown = [
  { stars: 5, count: 68, pct: 71 },
  { stars: 4, count: 22, pct: 23 },
  { stars: 3, count: 4, pct: 4 },
  { stars: 2, count: 2, pct: 2 },
  { stars: 1, count: 0, pct: 0 },
];

function StarRow({ filled, half = false }: { filled: boolean; half?: boolean }) {
  return (
    <Star
      size={16}
      className={
        filled
          ? "text-yellow-400 fill-yellow-400"
          : half
          ? "text-yellow-400 fill-yellow-200"
          : "text-gray-300"
      }
    />
  );
}

export default function Reviews() {
  const avgRating = 4.8;
  const totalReviews = 96;

  return (
    <div className="pt-16">
      {/* PAGE HERO */}
      <section
        className="relative py-24 flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
        }}
        data-testid="reviews-hero"
      >
        <div className="absolute inset-0 bg-[#111111]/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#2563EB] text-xs font-bold uppercase tracking-widest"
          >
            Customer Feedback
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-['Poppins'] font-bold text-4xl sm:text-5xl text-white mt-3"
          >
            What Our Customers Say
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-gray-300 mt-4 text-lg max-w-lg mx-auto"
          >
            {totalReviews}+ verified reviews from our valued customers
          </motion.p>
        </div>
      </section>

      {/* RATING SUMMARY */}
      <section className="py-16 bg-white" data-testid="rating-summary-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="bg-[#F5F5F5] rounded-2xl p-8 sm:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                  {/* Overall */}
                  <div className="text-center">
                    <div className="font-['Poppins'] font-bold text-7xl text-[#111111] leading-none">
                      {avgRating}
                    </div>
                    <div className="flex justify-center mt-3 gap-0.5">
                      <StarRow filled />
                      <StarRow filled />
                      <StarRow filled />
                      <StarRow filled />
                      <StarRow filled={false} half />
                    </div>
                    <div className="text-gray-500 text-sm mt-2">
                      Based on {totalReviews}+ reviews
                    </div>
                    <div className="inline-flex items-center gap-1.5 mt-3 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                      <CheckCircle size={13} />
                      All Verified Purchases
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-3" data-testid="rating-breakdown">
                    {ratingBreakdown.map((row) => (
                      <div key={row.stars} className="flex items-center gap-3">
                        <div className="flex items-center gap-0.5 w-20 shrink-0">
                          {[...Array(row.stars)].map((_, i) => (
                            <Star key={i} size={10} className="text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${row.pct}%` }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-full bg-[#2563EB] rounded-full"
                          />
                        </div>
                        <span className="text-xs text-gray-500 w-8 text-right shrink-0">
                          {row.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="py-14 bg-[#F5F5F5]" data-testid="reviews-grid-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-['Poppins'] font-bold text-2xl sm:text-3xl text-[#111111] mb-10">
              Customer Testimonials
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <FadeIn key={review.id} delay={Math.min(i * 0.07, 0.5)}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  data-testid={`review-card-${review.id}`}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-[#2563EB]/30 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className={
                          j < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-200"
                        }
                      />
                    ))}
                    <span className="text-xs text-gray-400 ml-1">{review.rating}.0</span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {review.initials}
                      </div>
                      <div>
                        <div className="font-semibold text-[#111111] text-sm">
                          {review.name}
                        </div>
                        <div className="text-xs text-gray-400">{review.date}</div>
                      </div>
                    </div>
                    {review.verified && (
                      <div className="flex items-center gap-1 text-green-600 text-xs">
                        <CheckCircle size={12} />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Note about more reviews */}
          <FadeIn className="text-center mt-12">
            <div className="inline-block bg-white rounded-xl px-8 py-5 shadow-md border border-gray-100">
              <p className="text-gray-600 text-sm">
                Showing 12 of{" "}
                <span className="font-bold text-[#111111]">96+</span> reviews.
                Visit our store to see all feedback.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* LEAVE A REVIEW CTA */}
      <section className="py-16 bg-[#111111]" data-testid="leave-review-section">
        <FadeIn className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-['Poppins'] font-bold text-3xl text-white mb-3">
            Shopped With Us?
          </h2>
          <p className="text-gray-400 mb-8">
            We&apos;d love to hear from you. Share your experience and help other
            shoppers make informed decisions.
          </p>
          <a
            href="https://wa.me/918955609429"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="leave-review-btn"
            className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm"
          >
            Share Your Feedback on WhatsApp
          </a>
        </FadeIn>
      </section>
    </div>
  );
}
