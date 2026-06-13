import MainLayout from "../../layouts/MainLayout";
import usePageTitle from "../../hooks/usePageTitle";

import ShowsHero from "./ShowsHero";
import FeaturedShows from "./FeaturedShows";
import LiveExperience from "./LiveExperience";
import PerformanceFormats from "./PerformanceFormats";
import ShowsCTA from "./ShowsCTA";
const Shows = () => {
  usePageTitle("Shows", "Explore upcoming Jazzmatazz performances, live sessions, and immersive jazz fusion experiences around the world.");

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