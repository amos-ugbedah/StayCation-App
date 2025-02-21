import StepIndicator from '../components/StepIndicator';
import BookingInfo from '../components/BookingInfo';
import PropertyInfo from '../components/PropertyInfo';
import PaymentDetails from '../components/PaymentDetails';
import ActionButtons from '../components/ActionButtons';

const Payment = () => {
  return (
    <main className="mt-10 mx-auto w-full px-4 md:px-10 lg:px-20">
      <StepIndicator />
      <BookingInfo />
      <section className="flex flex-col items-center mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1440px] px-8 relative">
          <PropertyInfo className="mb-8 md:mb-0" />
          {/* Vertical Line */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 w-[2px] bg-gray-300 transition-all duration-300 ease-in-out hover:w-[3px] hover:bg-blue-500"></div>
          <PaymentDetails className="mt-8 md:mt-0" />
        </div>
      </section>
      <ActionButtons />
    </main>
  );
};

export default Payment;