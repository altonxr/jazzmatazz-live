import MainLayout from "../../layouts/MainLayout";
import HeroSection from "../../components/sections/HeroSection";
import FeaturedShows from "../../components/sections/FeaturedShows";
import AboutPreview from "../../components/sections/AboutPreview";
import PerformanceExperience from "../../components/sections/PerformanceExperience";
import GalleryPreview from "../../components/sections/GalleryPreview";
import MembersPreview from "../../components/sections/MembersPreview";
import FinalCTA from "../../components/sections/FinalCTA";
import usePageTitle from "../../hooks/usePageTitle";

const Home = () => {
  usePageTitle("Home", "Experience Jazzmatazz - A cinematic live-performance experience blending jazz roots, immersive atmosphere, and modern fusion stage energy.");

  return (
    <MainLayout>
      <HeroSection />
      <FeaturedShows/>
      <AboutPreview/>
      <PerformanceExperience/>
      <GalleryPreview/>    
      <MembersPreview/>
      <FinalCTA />
    
    </MainLayout>

  );
};

export default Home;