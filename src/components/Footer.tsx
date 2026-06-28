import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logoImg from "@assets/image_1780925039528.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Products", href: "/products" },
  { label: "Reviews", href: "/reviews" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const categories = [
  { label: "Jeans", href: "/collections" },
  { label: "Shirts", href: "/collections" },
  { label: "T-Shirts", href: "/collections" },
  { label: "New Arrivals", href: "/collections" },
  { label: "Best Sellers", href: "/products" },
  { label: "Accessories", href: "/collections" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src={logoImg}
              alt="UMANFORCEFALNA"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-sm leading-relaxed mb-6">
              Premium men's fashion for the modern man. Jeans, shirts, t-shirts,
              and accessories crafted to elevate your style every day.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                data-testid="footer-instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2563EB] flex items-center justify-center transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                data-testid="footer-facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2563EB] flex items-center justify-center transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://wa.me/918955609429"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                data-testid="footer-whatsapp"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition-colors"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-['Poppins'] font-bold text-sm text-white uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm hover:text-[#2563EB] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-['Poppins'] font-bold text-sm text-white uppercase tracking-widest mb-5">
              Categories
            </h3>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <Link
                    href={cat.href}
                    data-testid={`footer-cat-${cat.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm hover:text-[#2563EB] transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-['Poppins'] font-bold text-sm text-white uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#2563EB]" />
                <span>
                  Punjab National Bank Ke Saamne,
                  <br />
                  SPU College Road, Falna,
                  <br />
                  Rajasthan, India
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={16} className="shrink-0 text-[#2563EB]" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+918955609429"
                    data-testid="footer-phone-1"
                    className="hover:text-[#2563EB] transition-colors"
                  >
                    +91 89556 09429
                  </a>
                  <a
                    href="tel:+917742517781"
                    data-testid="footer-phone-2"
                    className="hover:text-[#2563EB] transition-colors"
                  >
                    +91 77425 17781
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={16} className="shrink-0 text-[#2563EB]" />
                <span>umanforcefalna@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>
            &copy; {new Date().getFullYear()} UMANFORCEFALNA. All rights reserved.
          </span>
          <span>
            Premium Men&apos;s Fashion — Falna, Rajasthan
          </span>
        </div>
      </div>
    </footer>
  );
}
