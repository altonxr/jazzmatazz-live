import MainLayout from "../../layouts/MainLayout";

import MembersHero from "./MembersHero";
import FeaturedMembers from "./FeaturedMembers";

const Members = () => {
  return (
    <MainLayout>

      <MembersHero />
      <FeaturedMembers/>

    </MainLayout>
  );
};

export default Members;