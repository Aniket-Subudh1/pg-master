import ProblemsSection from "./components/hero/ProblemSection";
import Hero from "./components/hero/Hero";
import SolutionsSection from "./components/hero/SolutionsSection";
import HowItWorksSection from "./components/hero/HowItWorksSection";
import CTASection from "./components/hero/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemsSection />
      <SolutionsSection />
      <HowItWorksSection />
      <CTASection />
    </>
  );
}