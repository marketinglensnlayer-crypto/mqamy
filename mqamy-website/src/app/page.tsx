'use client';

import HomeHero from '@/components/HomeHero';
import AboutDubaiSection from '@/components/AboutDubaiSection';
import ValuePropositionSection from '@/components/ValuePropositionSection';
import FeaturedPropertiesSection from '@/components/FeaturedPropertiesSection';
import TeamPhilosophySection from '@/components/TeamPhilosophySection';
import AgentsSection from '@/components/AgentsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HomeHero />

      {/* About Dubai Section */}
      <AboutDubaiSection />

      {/* Value Proposition Section */}
      <ValuePropositionSection />

      {/* Featured Properties Section */}
      <FeaturedPropertiesSection />

      {/* Unified Team & Philosophy Section */}
      <TeamPhilosophySection />

      {/* Our Agents Section */}
      <AgentsSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
