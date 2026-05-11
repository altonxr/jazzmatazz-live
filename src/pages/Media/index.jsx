import MainLayout from "../../layouts/MainLayout";

import MediaHero from "./MediaHero";
import FeaturedVisuals from "./FeaturedVisuals";
import FeaturedSessions from "./FeaturedSessions";

const Media = () => {
  return (
    <MainLayout>

      <MediaHero />
      <FeaturedVisuals/>
      <FeaturedSessions/>

    </MainLayout>
  );
};

export default Media;