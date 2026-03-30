import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, MessageCircle } from "lucide-react";
import SolutionsDropdown from "./SolutionsDropdown";
import ProductsDropdown from "./ProductsDropdown";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "py-3 bg-[#06060f]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/30"
            : "py-5 bg-transparent",
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="relative z-10 flex items-center transition-all duration-300 hover:opacity-90 hover:scale-[1.03]"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src="/lovable-uploads/40e1cbf6-8a11-4c6d-9513-32e74c66bc1d.png"
              alt="Touchpointe Digital"
              className="h-8 md:h-9 drop-shadow-[0_0_12px_rgba(100,130,255,0.5)]"
            />
          </Link>

          {/* Desktop nav — absolutely centred */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {/* Home link */}
            <Link
              to="/"
              className={cn(
                "relative text-sm font-medium tracking-wide transition-all duration-200 group",
                location.pathname === "/"
                  ? "text-white"
                  : "text-gray-400 hover:text-white",
              )}
            >
              Home
              {/* Active / hover underline */}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300",
                  "bg-gradient-to-r from-blue-400 to-violet-500",
                  location.pathname === "/"
                    ? "w-full"
                    : "w-0 group-hover:w-full",
                )}
              />
            </Link>

            {/* Solutions Dropdown */}
            <SolutionsDropdown variant="desktop" />

            {/* Products Dropdown */}
            <ProductsDropdown variant="desktop" />

            {/* Insights link */}
            <Link
              to="/insights"
              className={cn(
                "relative text-sm font-medium tracking-wide transition-all duration-200 group",
                location.pathname === "/insights"
                  ? "text-white"
                  : "text-gray-400 hover:text-white",
              )}
            >
              Insights
              {/* Active / hover underline */}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300",
                  "bg-gradient-to-r from-cyan-400 to-blue-500",
                  location.pathname === "/insights"
                    ? "w-full"
                    : "w-0 group-hover:w-full",
                )}
              />
            </Link>

            {/* Company link */}
            <Link
              to="/company"
              className={cn(
                "relative text-sm font-medium tracking-wide transition-all duration-200 group",
                location.pathname === "/company"
                  ? "text-white"
                  : "text-gray-400 hover:text-white",
              )}
            >
              Company
              {/* Active / hover underline */}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300",
                  "bg-gradient-to-r from-emerald-400 to-teal-500",
                  location.pathname === "/company"
                    ? "w-full"
                    : "w-0 group-hover:w-full",
                )}
              />
            </Link>
          </nav>

          {/* Right side CTA */}
          <Link
            to="/contact"
            className={cn(
              "hidden md:inline-flex items-center gap-2 font-semibold text-sm tracking-wide transition-all duration-300",
              "text-white/80 hover:text-white group",
            )}
          >
            <MessageCircle className="w-4 h-4 text-violet-400 group-hover:text-violet-300 transition-colors" />
            Let's talk
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden z-10 p-2 text-white/80 hover:text-white transition-all duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[9999] md:hidden flex flex-col",
          "bg-[#07071a]/95 backdrop-blur-2xl",
          "transition-all duration-400 ease-in-out",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        {/* Close button */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
          <img
            src="/lovable-uploads/40e1cbf6-8a11-4c6d-9513-32e74c66bc1d.png"
            alt="Touchpointe Digital"
            className="h-8"
          />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col flex-1 items-center justify-center gap-8 px-8">
          {/* Home link */}
          <Link
            to="/"
            className="text-2xl font-semibold text-gray-200 hover:text-white transition-colors tracking-wide"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Solutions Dropdown */}
          <SolutionsDropdown
            variant="mobile"
            onItemClick={() => setMobileMenuOpen(false)}
          />

          {/* Mobile Products Dropdown */}
          <ProductsDropdown
            variant="mobile"
            onItemClick={() => setMobileMenuOpen(false)}
          />

          {/* Insights link */}
          <Link
            to="/insights"
            className="text-2xl font-semibold text-gray-200 hover:text-white transition-colors tracking-wide"
            onClick={() => setMobileMenuOpen(false)}
          >
            Insights
          </Link>

          {/* Company link */}
          <Link
            to="/company"
            className="text-2xl font-semibold text-gray-200 hover:text-white transition-colors tracking-wide"
            onClick={() => setMobileMenuOpen(false)}
          >
            Company
          </Link>

          <Link
            to="/contact"
            className="mt-6 px-10 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-blue-700/30"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let's talk
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
