const ThingsToDo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
      {/* Card 1 */}
      <div className="relative w-full h-auto rounded-[15px] flex flex-col items-start">
        <img src="/images/Tabby town.svg" className="w-full h-[180px] rounded-[15px]" alt="Tabby Town" />
        <div className="mt-2 w-full px-2">
          <p className="text-[20px] font-medium leading-[30px] text-left text-[#152C5B]">Tabby Town</p>
          <p className="text-[15px] font-light leading-[22.5px] text-left text-[#152C5B] mt-1">Nature</p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="relative w-full h-auto rounded-[15px] flex flex-col items-start">
        <img src="/images/Dog club.svg" className="w-full h-[180px] rounded-[15px]" alt="Dog Club" />
        <div className="mt-2 w-full px-2">
          <p className="text-[20px] font-medium leading-[30px] text-left text-[#152C5B]">Dog Club</p>
          <p className="text-[15px] font-light leading-[22.5px] text-left text-[#152C5B] mt-1">Pool</p>
        </div>
      </div>
      {/* Card 3 */}
      <div className="relative w-full h-auto rounded-[15px] flex flex-col items-start">
        <img src="/images/labour and wait.svg" className="w-full h-[180px] rounded-[15px]" alt="Labour and Wait" />
        <div className="mt-2 w-full px-2">
          <p className="text-[20px] font-medium leading-[30px] text-left text-[#152C5B]">Labour and Wait</p>
          <p className="text-[15px] font-light leading-[22.5px] text-left text-[#152C5B] mt-1">Shopping</p>
        </div>
      </div>
      {/* Card 4 */}
      <div className="relative w-full h-auto rounded-[15px] flex flex-col items-start">
        <img src="/images/snork.svg" className="w-full h-[180px] rounded-[15px]" alt="Snorkeling" />
        <div className="mt-2 w-full px-2">
          <p className="text-[20px] font-medium leading-[30px] text-left text-[#152C5B]">Snorkeling</p>
          <p className="text-[15px] font-light leading-[22.5px] text-left text-[#152C5B] mt-1">Beach</p>
        </div>
      </div>
    </div>
  );
};

export default ThingsToDo;