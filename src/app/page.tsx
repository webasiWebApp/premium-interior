import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Portfolio } from "@/components/sections/Portfolio";
import { Quote } from "@/components/sections/Quote";
import { Materials } from "@/components/sections/Materials";
import { KitchenPackages } from "@/components/sections/KitchenPackages";
import { PaymentStructure } from "@/components/sections/PaymentStructure";
import { Team } from "@/components/sections/Team";
import { SocialMedia } from "@/components/sections/SocialMedia";
import { InteractiveGuides } from "@/components/sections/InteractiveGuides";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <WhyChooseUs />
      <Portfolio />
      <Quote />
      <Materials />
      <KitchenPackages />
      <PaymentStructure />
      <Team />
      <SocialMedia />
      <InteractiveGuides />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
