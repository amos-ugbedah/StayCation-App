const PaymentReceipt = () => {
  return (
    <section className="flex flex-col items-center mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1440px] px-8">
        {/* Property Info */}
        <div className="relative w-full max-w-[330px] h-[319.35px] rounded-[15px] mx-auto">
          <img src="/images/Transact.svg" className="w-full h-[180px] rounded-[15px]" alt="Transaction complete" />
        </div>
      </div>
    </section>
  );
};

export default PaymentReceipt;