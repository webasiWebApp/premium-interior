import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="bg-white inline-block p-2 rounded-sm self-start">
              <Image src="/logo.jpg" alt="Platinum Interiors" width={140} height={48} className="h-10 w-auto" />
            </div>
            <p className="text-sm font-light leading-relaxed opacity-90 max-w-xs">
              Sri Lanka's trusted interiors and construction company. We design, build and install premium kitchens and interiors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-secondary font-semibold text-lg mb-6 border-b border-secondary/30 pb-2 inline-block">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="#portfolio" className="text-sm font-light hover:text-secondary transition-colors">Our Work</a></li>
              <li><a href="#why-choose-us" className="text-sm font-light hover:text-secondary transition-colors">Why Us</a></li>
              <li><a href="#" className="text-sm font-light hover:text-secondary transition-colors">Kitchens</a></li>
              <li><a href="#" className="text-sm font-light hover:text-secondary transition-colors">Team</a></li>
              <li><a href="#" className="text-sm font-light hover:text-secondary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-secondary font-semibold text-lg mb-6 border-b border-secondary/30 pb-2 inline-block">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="text-sm font-light opacity-90">123 Interior Avenue, Colombo, Sri Lanka</li>
              <li className="text-sm font-light opacity-90">+94 11 234 5678</li>
              <li className="text-sm font-light opacity-90">hello@platinuminteriors.lk</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-secondary font-semibold text-lg mb-6 border-b border-secondary/30 pb-2 inline-block">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-all">FB</a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-all">IG</a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-all">IN</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-light opacity-70">
            &copy; {new Date().getFullYear()} Platinum Interiors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
