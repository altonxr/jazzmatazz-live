import MainLayout from "../../layouts/MainLayout";
import HeroSection from "../../components/sections/HeroSection";
import FeaturedShows from "../../components/sections/FeaturedShows";
import AboutPreview from "../../components/sections/AboutPreview";
import PerformanceExperience from "../../components/sections/PerformanceExperience";
import GalleryPreview from "../../components/sections/GalleryPreview";
const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedShows/>
      <AboutPreview/>
      <PerformanceExperience/>
      <GalleryPreview/>    
    
    </MainLayout>

  );
};

export default Home;