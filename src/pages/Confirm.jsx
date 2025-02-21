import TransactionComplete from '../components/TransactionComplete';
import PaymentReceipt from '../components/PaymentReceipt';
import BackHomeButton from '../components/BackHomeButton';
import StepConfirm from '../components/StepConfirm';

const Confirm = () => {
  return (
    <main className="mt-10 mx-auto w-full px-4 md:px-10 lg:px-20">
      <StepConfirm />
      <TransactionComplete />
      <PaymentReceipt />
      <BackHomeButton />
    </main>
  );
};

export default Confirm;