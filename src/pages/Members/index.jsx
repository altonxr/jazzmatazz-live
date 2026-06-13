import MainLayout from "../../layouts/MainLayout";
import usePageTitle from "../../hooks/usePageTitle";

import MembersHero from "./MembersHero";
import FeaturedMembers from "./FeaturedMembers";

const Members = () => {
  usePageTitle("Members", "Meet the talented musicians of Jazzmatazz - A collective of jazz fusion artists bringing cinematic energy to live performances.");

  return (
    <MainLayout>

      <MembersHero />
      <FeaturedMembers/>

    </MainLayout>
  );
};

export default Members;