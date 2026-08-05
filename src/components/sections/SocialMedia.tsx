"use client";

import { useEffect } from "react";
import Script from "next/script";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { SectionHeading } from "../ui/SectionHeading";
import { ExternalLink, Heart, Users, UserCheck } from "lucide-react";

export function SocialMedia() {
  useEffect(() => {
    // Re-trigger TikTok embed script parse if script is already present in window
    if (typeof window !== "undefined" && (window as any).tiktokEmbed) {
      try {
        (window as any).tiktokEmbed.lib.render();
      } catch (e) {
        // Safe fallback if embed lib is already processing
      }
    }
  }, []);

  return (
    <section id="social" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
        <SectionHeading
          eyebrow="Stay Connected"
          title="Follow Us On Social Media"
          description="Join our online community to see our latest kitchen transformations, interior design ideas, and client stories."
          centered
        />

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          
          {/* TikTok Column */}
          <RevealOnScroll delay={0.1}>
            <div className="bg-white p-6 md:p-8 rounded-[5px] border border-gray-200 flex flex-col h-full">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-black text-white rounded-[5px] flex items-center justify-center">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.34V9.38a8.16 8.16 0 0 0 4.91 1.62V7.55a4.85 4.85 0 0 1-1-.86z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary leading-tight">TikTok</h3>
                    <p className="text-xs text-gray-500 font-medium">@platinum.interior1</p>
                  </div>
                </div>
                <a
                  href="https://www.tiktok.com/@platinum.interior1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-black text-white text-xs font-semibold px-4 py-2 rounded-[5px] transition-colors hover:bg-gray-800"
                >
                  <span>Follow</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* TikTok Stats */}
              <div className="grid grid-cols-3 gap-2 py-6 my-4 bg-gray-50 rounded-[5px] border border-gray-100 text-center">
                <div>
                  <div className="flex items-center justify-center gap-1 text-gray-500 text-[11px] font-medium uppercase tracking-wider mb-1">
                    <UserCheck size={12} />
                    <span>Following</span>
                  </div>
                  <div className="text-xl font-bold text-primary">0</div>
                </div>
                <div className="border-x border-gray-200">
                  <div className="flex items-center justify-center gap-1 text-gray-500 text-[11px] font-medium uppercase tracking-wider mb-1">
                    <Users size={12} />
                    <span>Followers</span>
                  </div>
                  <div className="text-xl font-bold text-primary">8554</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 text-gray-500 text-[11px] font-medium uppercase tracking-wider mb-1">
                    <Heart size={12} />
                    <span>Likes</span>
                  </div>
                  <div className="text-xl font-bold text-primary">24.8K</div>
                </div>
              </div>

              {/* TikTok Embed Block */}
              <div className="flex-grow flex items-center justify-center overflow-hidden py-2 min-h-[350px]">
                <blockquote
                  className="tiktok-embed"
                  cite="https://www.tiktok.com/@platinum.interior1"
                  data-unique-id="platinum.interior1"
                  data-embed-type="creator"
                  style={{ maxWidth: "780px", minWidth: "288px", width: "100%" }}
                >
                  <section>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.tiktok.com/@platinum.interior1?refer=creator_embed"
                      className="text-primary font-medium text-sm underline"
                    >
                      @platinum.interior1
                    </a>
                  </section>
                </blockquote>
              </div>
            </div>
          </RevealOnScroll>

          {/* Facebook Column */}
          <RevealOnScroll delay={0.2}>
            <div className="bg-white p-6 md:p-8 rounded-[5px] border border-gray-200 flex flex-col h-full">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#1877F2] text-white rounded-[5px] flex items-center justify-center">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary leading-tight">Facebook</h3>
                    <p className="text-xs text-gray-500 font-medium">@Theplatinuminteriors</p>
                  </div>
                </div>
                <a
                  href="https://web.facebook.com/Theplatinuminteriors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#1877F2] text-white text-xs font-semibold px-4 py-2 rounded-[5px] transition-colors hover:bg-[#1567d3]"
                >
                  <span>Follow</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Facebook Stats */}
              <div className="grid grid-cols-2 gap-2 py-6 my-4 bg-gray-50 rounded-[5px] border border-gray-100 text-center">
                <div className="border-r border-gray-200">
                  <div className="flex items-center justify-center gap-1 text-gray-500 text-[11px] font-medium uppercase tracking-wider mb-1">
                    <Users size={12} />
                    <span>Followers</span>
                  </div>
                  <div className="text-xl font-bold text-primary">22K</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 text-gray-500 text-[11px] font-medium uppercase tracking-wider mb-1">
                    <UserCheck size={12} />
                    <span>Following</span>
                  </div>
                  <div className="text-xl font-bold text-primary">0</div>
                </div>
              </div>

              {/* Facebook Showcase Card Body */}
              <div className="flex-grow flex flex-col justify-between pt-4">
                <div className="bg-gray-50 p-6 rounded-[5px] border border-gray-100 mb-6 flex-grow flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">Official Facebook Page</span>
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2">The Platinum Interiors</h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Explore real client projects, latest design concepts, customer reviews, and project milestones updated regularly.
                  </p>
                  <a
                    href="https://web.facebook.com/Theplatinuminteriors/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#1877F2] font-semibold flex items-center gap-1 hover:underline"
                  >
                    <span>https://web.facebook.com/Theplatinuminteriors/</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                <a
                  href="https://web.facebook.com/Theplatinuminteriors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-primary text-secondary text-xs font-medium uppercase tracking-wider py-3 rounded-[5px] transition-colors hover:bg-primary/90 block"
                >
                  Visit Facebook Page
                </a>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>

      {/* Official TikTok Embed Script */}
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </section>
  );
}

export const Social = SocialMedia;
