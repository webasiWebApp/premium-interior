"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { useSmoothScroll } from "@/lib/smoothScroll";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Our Work", href: "#portfolio", scroll: true },
  { label: "Why Us", href: "#why-choose-us", scroll: true },
  { label: "Kitchens", href: "#kitchens", scroll: true },
  { label: "Team", href: "#team", scroll: true },
  { label: "FAQ", href: "#faq", scroll: true },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof NAV_LINKS[0]) => {
    if (link.scroll) {
      e.preventDefault();
      scrollTo(link.href);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isScrolled || isMobileMenuOpen ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollTo(0); }}>
            <Image
              src={isScrolled || isMobileMenuOpen ? "/logo.png" : "/logoW.png"}
              alt="Platinum Interiors"
              width={200}
              height={64}
              className="h-14 md:h-16 w-auto object-contain transition-all duration-300"
              priority
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={cn(
                "text-[14px] font-regular transition-colors hover:text-secondary",
                isScrolled ? "text-primary" : "text-white"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="primary" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}>
            Book Free Home Visit
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} color={isScrolled ? "#186172" : "#FFFFFF"} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t mt-4"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-primary text-lg py-2 border-b border-gray-100"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4">
                <Button variant="primary" className="w-full justify-center" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); setIsMobileMenuOpen(false); }}>
                  Book Free Home Visit
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
