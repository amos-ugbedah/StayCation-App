const HotelsWithLivingRoom = () => {
  return (
    <div className="w-full mx-auto">
      <section className="relative mt-10 mb-0 mx-10 md:mx-auto lg:mx-10 max-w-full">
        <h4 className="text-2xl font-medium text-left text-[#152C5B]">Hotels with Living Room</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 place-items-center">
          {/* Card 1 */}
          <div className="relative rounded-[15px]">
            <img src="/images/Green Park.svg" className="w-full h-56 rounded-[15px] object-cover" alt="Green Park" />
            <div className="mt-2">
              <p className="text-lg font-medium leading-none text-left text-[#152C5B]">Green Park</p>
              <p className="mt-1 text-sm font-light leading-none text-left text-[#152C5B]">Tangerang, Indonesia</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative rounded-[15px]">
            <img src="/images/Podo Waes.svg" className="w-full h-56 rounded-[15px] object-cover" alt="Podo Wae" />
            <div className="mt-2">
              <p className="text-lg font-medium leading-none text-left text-[#152C5B]">Podo Wae</p>
              <p className="mt-1 text-sm font-light leading-none text-left text-[#152C5B]">Madiun, Indonesia</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative rounded-[15px]">
            <img src="/images/Silver.svg" className="w-full h-56 rounded-[15px] object-cover" alt="Silver Rain" />
            <div className="mt-2">
              <p className="text-lg font-medium leading-none text-left text-[#152C5B]">Silver Rain</p>
              <p className="mt-1 text-sm font-light leading-none text-left text-[#152C5B]">Bandung, Indonesia</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="relative rounded-[15px]">
            <img src="/images/Cashville.svg" className="w-full h-56 rounded-[15px] object-cover" alt="Cashville" />
            <p className="absolute top-0 right-0 p-2 text-sm font-medium leading-none text-white bg-[#FF498B] rounded-tr-[15px] rounded-bl-[15px]">Popular Choice</p>
            <div className="mt-2">
              <p className="text-lg font-medium leading-none text-left text-[#152C5B]">Cashville</p>
              <p className="mt-1 text-sm font-light leading-none text-left text-[#152C5B]">Kemang, Indonesia</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HotelsWithLivingRoom;