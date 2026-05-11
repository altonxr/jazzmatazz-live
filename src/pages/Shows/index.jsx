import MainLayout from "../../layouts/MainLayout";

import ShowsHero from "./ShowsHero";
import FeaturedShows from "./FeaturedShows";
import LiveExperience from "./LiveExperience";
import PerformanceFormats from "./PerformanceFormats";
import ShowsCTA from "./ShowsCTA";
const Shows = () => {
  return (
    <MainLayout>

      <ShowsHero />
      <FeaturedShows />
      <LiveExperience />
      <PerformanceFormats />
      <ShowsCTA />

    </MainLayout>
  );
};

export default Shows;