import MainLayout from "../../layouts/MainLayout";
import usePageTitle from "../../hooks/usePageTitle";

import BookingHero from "./BookingHero";
import BookingInfo from "./BookingInfo";

const Booking = () => {
  usePageTitle("Booking", "Book Jazzmatazz for your event - Festival performances, private experiences, and collaborative events tailored to your vision.");

  return (
    <MainLayout>

      <BookingHero />
      <BookingInfo/>

    </MainLayout>
  );
};

export default Booking;