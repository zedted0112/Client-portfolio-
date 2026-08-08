import React from 'react';
import { siteData } from './data/data';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatStrip } from './components/StatStrip';
import { AboutSection } from './components/AboutSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { VenturesSection } from './components/VenturesSection';
import { ProjectGrid } from './components/ProjectGrid';
import { PhilosophyGrid } from './components/PhilosophyGrid';
import { AchievementsSection } from './components/AchievementsSection';
import { MediaSection } from './components/MediaSection';
import { SocialSection } from './components/SocialSection';
import { Gallery } from './components/Gallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-[#e8e6e1] font-sans selection:bg-[#c5a880] selection:text-[#0d0f12]">
      
      {/* Top Navbar */}
      <Navbar
        navItems={siteData.navigation}
        personalName={siteData.personal.name}
        personalTitle={siteData.personal.title}
      />

      {/* Hero Section */}
      <Hero
        eyebrow={siteData.hero.eyebrow}
        headline={siteData.hero.headline}
        subheadline={siteData.hero.subheadline}
        primaryCta={siteData.hero.primaryCta}
        secondaryCta={siteData.hero.secondaryCta}
        tertiaryCta={siteData.hero.tertiaryCta}
        image={siteData.hero.image}
      />

      {/* Impact Statistics Strip */}
      <StatStrip stats={siteData.stats} />

      {/* About Me Section */}
      <AboutSection about={siteData.about} />

      {/* Journey Timeline */}
      <JourneyTimeline items={siteData.journey} />

      {/* Current Ventures */}
      <VenturesSection ventures={siteData.ventures} />

      {/* Work Portfolio & Landmark Projects */}
      <ProjectGrid projects={siteData.projects} />

      {/* Core Philosophy (8 Es of Business) */}
      <PhilosophyGrid philosophy={siteData.philosophy} />

      {/* Achievements & Recognition */}
      <AchievementsSection awards={siteData.awards} />

      {/* Media & Press Articles */}
      <MediaSection articles={siteData.media} />

      {/* Social Media, Insights & YouTube Videos */}
      <SocialSection posts={siteData.socialPosts} videos={siteData.videos} />

      {/* Photo Gallery */}
      <Gallery gallery={siteData.gallery} />

      {/* Contact Section */}
      <ContactSection contact={siteData.contact} />

      {/* Footer */}
      <Footer
        navItems={siteData.navigation}
        personalName={siteData.personal.name}
        personalTitle={siteData.personal.title}
      />

    </div>
  );
}
