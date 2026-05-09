import MainLayout from "../../layouts/MainLayout";
import HeroSection from "../../components/sections/HeroSection";
import FeaturedShows from "../../components/sections/FeaturedShows";
import AboutPreview from "../../components/sections/AboutPreview";
import PerformanceExperience from "../../components/sections/PerformanceExperience";
const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedShows/>
      <AboutPreview/>
      <PerformanceExperience/>    
    </MainLayout>

  );
};

export default Home;