"use client";

import Image from "next/image";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { SectionHeading } from "../ui/SectionHeading";
import { StatBlock } from "../ui/StatBlock";

const team = [
  {
    photo: "/team/Shamal Weerasiri.jpeg",
    role: "Manager",
    name: "Shamal Weerasiri",
    credential: "BSc (Hons) Quantity Surveying",
    bio: "The driving force behind Platinum Interiors — combining modern design vision with professional quantity surveying expertise to deliver projects on time, on budget and beyond expectations.",
    chips: ["Design Strategy", "Project Costing", "Client Relations"],
  },
  {
    photo: "/team/Sarath Premathilaka.jpg",
    role: "Proprietor & Founder",
    name: "Sarath Premathilaka",
    credential: "28 Years Industry Experience",
    bio: "With over 28 years in construction and interior business and more than 1,000 completed projects, Sarath brings unmatched practical expertise, loyal client relationships and an unwavering commitment to quality.",
    stats: [{ value: "28", label: "Years Exp" }, { value: "1000+", label: "Projects" }],
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
        <SectionHeading 
          eyebrow="The People Behind Every Project" 
          title="Meet Our Team"
          description="Every project carries the weight of our name — and two generations of expertise."
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-16">
          {team.map((member, i) => (
            <RevealOnScroll key={member.name} delay={i * 0.2}>
              <div className="flex flex-col md:flex-row gap-8 bg-white p-6 md:p-8 rounded-[5px]  border border-gray-100 h-full transition-all duration-300 ">
                <div className="w-full md:w-2/5 aspect-[4/5] relative rounded-[5px] overflow-hidden flex-shrink-0 bg-gray-100">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                
                <div className="flex flex-col justify-center flex-grow py-2">
                  <div className="text-[12px] font-medium uppercase tracking-widest text-secondary bg-secondary/10 w-fit px-3 py-1 rounded-[5px] mb-4">
                    {member.role}
                  </div>
                  
                  <h3 className="text-[28px] md:text-[32px] font-semibold text-primary leading-tight mb-1">
                    {member.name}
                  </h3>
                  
                  <p className="text-[14px] text-gray-500 font-medium mb-5">
                    {member.credential}
                  </p>
                  
                  <p className="text-[14px] text-black font-regular leading-relaxed mb-8 flex-grow">
                    {member.bio}
                  </p>
                  
                  {member.chips && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {member.chips.map(chip => (
                        <span key={chip} className="text-[12px] font-medium text-primary bg-[#C1E700]/20 px-3 py-1.5 rounded-[5px]">
                          {chip}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {member.stats && (
                    <div className="flex flex-wrap gap-10 mt-auto">
                      {member.stats.map(stat => (
                        <StatBlock key={stat.label} value={stat.value} label={stat.label} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
