import MainLayout from "../../layouts/MainLayout";
import HeroSection from "../../components/sections/HeroSection";
import FeaturedShows from "../../components/sections/FeaturedShows";
const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedShows/>    
    </MainLayout>

  );
};

export default Home;