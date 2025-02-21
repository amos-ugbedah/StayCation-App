const ApartmentWithKitchen = () => {
  return (
    <div className="w-full mx-auto">
      <section className="relative mt-10 mb-0 mx-10 md:mx-auto lg:mx-10 max-w-full">
        <h4 className="text-2xl font-medium text-left text-[#152C5B]">Apartment with Kitchen</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 place-items-center">
          {/* Card 1 */}
          <div className="relative rounded-[15px]">
            <img src="/images/Ps Wood.svg" className="w-full h-56 rounded-[15px] object-cover" alt="PS Wood" />
            <div className="mt-2">
              <p className="text-lg font-medium leading-none text-left text-[#152C5B]">PS Wood</p>
              <p className="mt-1 text-sm font-light leading-none text-left text-[#152C5B]">Depok, Indonesia</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative rounded-[15px]">
            <img src="/images/One Five.svg" className="w-full h-56 rounded-[15px] object-cover" alt="One Five" />
            <div className="mt-2">
              <p className="text-lg font-medium leading-none text-left text-[#152C5B]">One Five</p>
              <p className="mt-1 text-sm font-light leading-none text-left text-[#152C5B]">Jakarta, Indonesia</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative rounded-[15px]">
            <img src="/images/Minimal1.svg" className="w-full h-56 rounded-[15px] object-cover" alt="Minimal" />
            <p className="absolute top-0 right-0 p-2 text-sm font-medium leading-none text-white bg-[#FF498B] rounded-tr-[15px] rounded-bl-[15px]">Popular Choice</p>
            <div className="mt-2">
              <p className="text-lg font-medium leading-none text-left text-[#152C5B]">Minimal</p>
              <p className="mt-1 text-sm font-light leading-none text-left text-[#152C5B]">Bogor, Indonesia</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="relative rounded-[15px]">
            <img src="/images/stays.svg" className="w-full h-56 rounded-[15px] object-cover" alt="Stays Home" />
            <div className="mt-2">
              <p className="text-lg font-medium leading-none text-left text-[#152C5B]">Stays Home</p>
              <p className="mt-1 text-sm font-light leading-none text-left text-[#152C5B]">Wonosobo, Indonesia</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ApartmentWithKitchen;