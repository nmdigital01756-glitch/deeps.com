import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@assets/image_1780925039528.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Products", href: "/products" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#111111]/95 backdrop-blur-md shadow-lg"
            : "bg-[#111111]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" data-testid="nav-logo">
              <img
                src={logoImg}
                alt="UMANFORCEFALNA"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                  className={`text-sm font-medium tracking-wide transition-colors relative group ${
                    location === link.href
                      ? "text-[#2563EB]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#2563EB] transition-all duration-300 ${
                      location === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                aria-label="Search"
                data-testid="btn-search"
                className="hidden md:flex text-gray-300 hover:text-white p-2 transition-colors"
              >
                <Search size={20} />
              </button>
              <button
                aria-label="Cart"
                data-testid="btn-cart"
                className="hidden md:flex text-gray-300 hover:text-white p-2 transition-colors relative"
              >
                <ShoppingBag size={20} />
                <span className="absolute -top-0.5 -right-0.5 bg-[#2563EB] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  0
                </span>
              </button>
              <button
                aria-label="Toggle menu"
                data-testid="btn-hamburger"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-gray-300 hover:text-white p-2 transition-colors"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#111111]/98 backdrop-blur-md border-t border-white/10 md:hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                  className={`text-base font-medium py-2 border-b border-white/5 transition-colors ${
                    location === link.href
                      ? "text-[#2563EB]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-4 pt-2">
                <button className="flex items-center gap-2 text-gray-300 hover:text-white text-sm">
                  <Search size={18} /> Search
                </button>
                <button className="flex items-center gap-2 text-gray-300 hover:text-white text-sm">
                  <ShoppingBag size={18} /> Cart
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
