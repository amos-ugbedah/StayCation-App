const PropertyClient = ({ className }) => {
  return (
    <div className={`relative w-full max-w-[264.07px] h-[258px] rounded-[15px] mx-auto ${className}`}>
      <img src="/images/Cashville.svg" className="w-full h-[180px] rounded-[15px]" alt="Cashville" />
      <div className="mt-2 flex justify-between items-center">
        <div>
          <p className="w-full text-[20px] font-medium leading-[30px] text-left text-[#152C5B] p-1 rounded-[5px]">Cashville</p>
          <p className="w-full text-[15px] font-light leading-[22.5px] text-left text-[#152C5B] mt-1 p-1 rounded-[5px] whitespace-nowrap">Kemang, Indonesia</p>
        </div>
        <div>
          <p className="font-poppins text-[18px] font-light leading-[30.6px] text-left text-[#000000] w-[188px] h-[31px] mt-0.5">
            <span className="font-semibold">$480 USD</span> for <span className="font-semibold">2 nights</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyClient;