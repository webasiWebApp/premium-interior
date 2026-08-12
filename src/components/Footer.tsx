import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="bg-white inline-block p-2 rounded-sm self-start">
              <Image src="/logo.png" alt="Platinum Interiors" width={140} height={48} className="h-10 w-auto" />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-secondary font-semibold text-lg mb-6 border-b border-secondary/30 pb-2 inline-block">Contact us</h3>
            <ul className="flex flex-col gap-4">
              <li className="text-sm font-light opacity-90">
                <a 
                  href="https://maps.google.com/?q=Platinum+Interiors,+welagane+watta,+Maspotha,+Kurunegala" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  Platinum Interiors, welagane watta, Maspotha , Kurunegala
                </a>
              </li>
              <li className="text-sm font-light opacity-90">
                <a 
                  href="tel:+94727261058" 
                  className="hover:text-secondary transition-colors"
                >
                  +94 727261058
                </a>
              </li>
              <li className="text-sm font-light opacity-90">
                <a 
                  href="mailto:hello@theplatinuminteriors.com" 
                  className="hover:text-secondary transition-colors"
                >
                  hello@theplatinuminteriors.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-secondary font-semibold text-lg mb-6 border-b border-secondary/30 pb-2 inline-block">Follow us</h3>
            <div className="flex gap-4">
              <a 
                href="https://web.facebook.com/people/Platinum-Interiors/61586214477243/#" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-all text-white"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@Platinum.Interiors1" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="TikTok"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-all text-white"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.34V9.38a8.16 8.16 0 0 0 4.91 1.62V7.55a4.85 4.85 0 0 1-1-.86z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-light opacity-70">
            &copy; {new Date().getFullYear()} Platinum Interiors. All rights reserved.
          </p>
          <p className="text-xs font-light opacity-70">
            Design by <a href="https://webasi.co" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">WEBASI</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
