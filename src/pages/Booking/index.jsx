import MainLayout from "../../layouts/MainLayout";

import BookingHero from "./BookingHero";
import BookingInfo from "./BookingInfo";

const Booking = () => {
  return (
    <MainLayout>

      <BookingHero />
      <BookingInfo/>

    </MainLayout>
  );
};

export default Booking;