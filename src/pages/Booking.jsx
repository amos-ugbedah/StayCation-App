import BookingLog from '../components/BookingLog';
import Buttons from '../components/Buttons';
import Circle from '../components/Circle';
import ClientInfo from '../components/ClientInfo';
import PropertyClient from '../components/PropertyClient';

const Booking = () => {
  return (
    <main className="mt-10 mx-auto w-full px-4 md:px-10 lg:px-20">
      <Circle />
      <BookingLog />
      <section className="flex flex-col items-center mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1440px] px-8">
          <PropertyClient className="mb-8 md:mb-0" />
          <ClientInfo className="mt-8 md:mt-0" />
        </div>
      </section>
      <Buttons />
    </main>
  );
};

export default Booking;