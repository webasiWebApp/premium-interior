import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Portfolio } from "@/components/sections/Portfolio";
import { Quote } from "@/components/sections/Quote";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <WhyChooseUs />
      <Portfolio />
      <Quote />
    </div>
  );
}
