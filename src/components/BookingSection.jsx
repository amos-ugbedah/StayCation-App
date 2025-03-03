const BookingSection = () => {
  return (
    <div className="w-[487px] h-[550px] border border-[#E5E5E5] rounded-[15px] p-6 mt-8 md:mt-0 md:ml-4">
      <h5 className="text-[24px] font-medium leading-[36px]">Start Booking</h5>
      <p className="text-[30px] font-light leading-[54px] text-[#dbdddf] mt-3">
        <span className="text-green-400 font-semibold">$280</span> per night
      </p>

      {/* Stay Duration */}
      <div className="mt-3">
        <h3 className="text-[18px] font-normal leading-[30.6px]">
          How long will you stay?
        </h3>
        <div className="flex items-center bg-[#F5F6F8] rounded-[4px] mt-2">
          <button className="w-[45px] h-[50px] bg-[#E74C3C] text-white flex items-center justify-center">
            -
          </button>
          <input
            type="text"
            value="2 nights"
            className="w-full h-[50px] bg-[#F5F6F8] text-[#000] text-[18px] font-normal text-center"
            readOnly
          />
          <button className="w-[45px] h-[50px] bg-[#1ABC9C] text-white flex items-center justify-center">
            +
          </button>
        </div>
      </div>

      {/* Date Picker */}
      <div className="mt-8">
        <h3 className="text-[18px] font-normal leading-[30.6px]">
          Pick a date
        </h3>
        <div className="flex items-center bg-[#F5F6F8] rounded-[4px] mt-2">
          <div className="w-[45px] h-[50px] bg-[#152C5B] flex items-center justify-center">
            <img
              src="/images/calendar.svg"
              alt="Calendar"
              className="w-6 h-6 text-white"
            />
          </div>
          <input
            type="text"
            value="20 Jan - 22 Jan"
            className="w-full h-[50px] bg-[#F5F6F8] text-[#000] text-[18px] font-normal text-center"
            readOnly
          />
        </div>
      </div>

      {/* Payment Info */}
      <p className="mt-6 text-[18px] leading-[30.6px] font-light">
        You will pay <span className="text-black font-medium">$480 USD</span>{" "}
        for <span className="text-black font-medium">2 nights</span>
      </p>

      {/* Continue Button */}
      <button className="bg-blue-700 w-full h-[58px] rounded-[4px] mt-10 text-white font-semibold">
        Continue Booking
      </button>
    </div>
  );
};

export default BookingSection;
