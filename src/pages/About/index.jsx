import MainLayout from "../../layouts/MainLayout";
import usePageTitle from "../../hooks/usePageTitle";

import PageHero from "../../components/common/PageHero";

import AboutPhilosophy from "./AboutPhilosophy";
import AboutJourney from "./AboutJourney";
import AboutEthos from "./AboutEthos";
const About = () => {
  usePageTitle("About", "Learn about Jazzmatazz - A cinematic jazz fusion collective built around atmosphere, emotional performance, and immersive live experiences.");

  return (
    <MainLayout>

      <PageHero
        eyebrow="About Jazzmatazz"
        title="Built Around Atmosphere"
        description="Jazzmatazz blends cinematic stage presence, immersive lighting, modern jazz fusion, and emotional live performance into unforgettable experiences."
      />

      <AboutPhilosophy />
      <AboutJourney/>
<AboutEthos />
    </MainLayout>
  );
};

export default About;