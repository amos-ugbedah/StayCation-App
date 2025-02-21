const PaymentDetails = ({ className }) => {
  return (
    <div className={`flex flex-col items-start w-full max-w-[320px] mx-auto ${className}`}>
      {/* Transfer Proof */}
      <div className="w-full">
        <label className="font-poppins text-[18px] font-medium leading-[30.6px] text-left">Upload Transfer Proof</label>
        <input type="text" placeholder="transferproof.png" className="w-full h-[51.56px] p-2 mt-1 border border-gray-300 rounded-tl-[4px] rounded-br-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
      </div>
      {/* Bank Origin */}
      <div className="w-full mt-4">
        <label className="font-poppins text-[18px] font-medium leading-[30.6px] text-left">Bank Origin</label>
        <input type="text" placeholder="BCA" className="w-full h-[51.56px] p-2 mt-1 border border-gray-300 rounded-tl-[4px] rounded-br-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
      </div>
      {/* Sender Name */}
      <div className="w-full mt-4">
        <label className="font-poppins text-[18px] font-medium leading-[30.6px] text-left">Sender Name</label>
        <input type="text" placeholder="Ihsan Adi" className="w-full h-[51.56px] p-2 mt-1 border border-gray-300 rounded-tl-[4px] rounded-br-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
      </div>
    </div>
  );
};

export default PaymentDetails;