import MainLayout from "../../layouts/MainLayout";
import usePageTitle from "../../hooks/usePageTitle";

import MediaHero from "./MediaHero";
import FeaturedVisuals from "./FeaturedVisuals";
import FeaturedSessions from "./FeaturedSessions";

const Media = () => {
  usePageTitle("Media", "Watch Jazzmatazz's featured performances, live sessions, and immersive visual content from cinematic jazz fusion experiences.");

  return (
    <MainLayout>

      <MediaHero />
      <FeaturedVisuals/>
      <FeaturedSessions/>

    </MainLayout>
  );
};

export default Media;