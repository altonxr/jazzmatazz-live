import MainLayout from "../../layouts/MainLayout";
import HeroSection from "../../components/sections/HeroSection";
import FeaturedShows from "../../components/sections/FeaturedShows";
import AboutPreview from "../../components/sections/AboutPreview";
const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedShows/>
      <AboutPreview/>    
    </MainLayout>

  );
};

export default Home;