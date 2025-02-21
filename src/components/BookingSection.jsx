const BookingSection = () => {
  return (
    <div className="w-full h-auto border-2 rounded-[15px] border-[#E5E5E5] p-4 mt-8 md:mt-0 md:ml-4">
      <h5 className="font-medium text-[24px] leading-[36px]">Start Booking</h5>
      <p className="text-[30px] font-light leading-[54px] text-[#dbdddf] mt-3">
        <span className="text-green-400 font-semibold">$280</span> per night
      </p>
      <div className="relative w-full mt-3">
        <h3 className="text-[18px] font-normal leading-[30.6px]">How long you will stay?</h3>
        <div className="relative w-full h-[51.56px] flex items-center bg-[#F5F6F8] rounded-[4px] mt-2">
          <button className="w-[45px] h-full bg-[#E74C3C] text-white flex items-center justify-center">-</button>
          <input type="text" value="2 nights" className="w-full h-full bg-[#F5F6F8] text-[#000000] text-[18px] font-normal leading-[30.6px] text-center" readOnly />
          <button className="w-[45px] h-full bg-[#1ABC9C] text-white flex items-center justify-center">+</button>
        </div>
      </div>
      <div className="relative w-full mt-8">
        <h3 className="text-[18px] font-normal leading-[30.6px]">Pick a date</h3>
        <div className="relative w-full h-[51.56px] flex items-center bg-[#f6f6f7] rounded-tl-[4px] mt-2">
          <div className="w-[45px] h-full bg-[#152C5B] flex items-center justify-center">
            <img src="/images/calendar.svg" alt="Calendar" className="w-6 h-6 text-white" />
          </div>
          <input type="text" value="20 Jan-22 Jan" className="w-full h-full bg-[#F5F6F8] text-[#000000] text-[18px] font-normal leading-[30.6px] text-center" readOnly />
        </div>
      </div>
      <p className="mt-0 w-full text-[18px] leading-[30.6px] font-light">You will pay <span className="text-black font-medium">$480 USD</span> for <span className="text-black font-medium">2 nights</span></p>
      <button className="bg-blue-700 w-full h-[58.44px] rounded-[4px] mt-14">Continue Book</button>
    </div>
  );
};

export default BookingSection;