import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutPreview from "@/components/home/AboutPreview";
import UpcomingEventsPreview from "@/components/home/UpcomingEventsPreview";
import LeadershipSpotlight from "@/components/home/LeadershipSpotlight";
import LineageTimeline from "@/components/home/LineageTimeline";
import BranchesSection from "@/components/home/BranchesSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import AffiliationsSection from "@/components/home/AffiliationsSection";
import CTABanner from "@/components/home/CTABanner";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <LeadershipSpotlight />
      <LineageTimeline preview />
      <UpcomingEventsPreview />
      <BranchesSection />
      <GalleryPreview />
      <TestimonialsSlider />
      <AffiliationsSection />
      <CTABanner />
    </main>
  );
};

export default Index;
