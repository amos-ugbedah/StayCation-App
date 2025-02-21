const BackYard = () => {
  return (
    <div className="w-full mx-auto">
      <section className="relative mt-10 mb-0 mx-10 md:mx-auto lg:mx-10 max-w-full">
        <h4 className="col-span-1 md:col-span-2 lg:col-span-4 text-2xl font-medium text-left text-[#152C5B]">Houses with Backyard</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 place-items-center">
          {/* Main Card */}
          <div className="relative rounded-[15px]">
            <img src="/images/Tabby.svg" className="w-full h-56 rounded-[15px] object-cover" alt="Tabby" />
            <p className="absolute top-0 right-0 p-2 text-sm font-medium leading-none text-white bg-[#FF498B] rounded-tr-[15px] rounded-bl-[15px]">Popular Choice</p>
            <div className="mt-2">
              <p className="text-lg font-medium leading-none text-left text-[#152C5B]">Tabby Town</p>
              <p className="mt-1 text-sm font-light leading-none text-left text-[#152C5B]">Gunug Batu, Indonesia</p>
            </div>
          </div>
          {/* Card 1 */}
          <div className="relative rounded-[15px]">
            <img src="/images/Anggaga.svg" className="w-full h-56 rounded-[15px] object-cover" alt="Anggana" />
            <div className="mt-2">
              <p className="text-lg font-medium leading-none text-left text-[#152C5B]">Anggana</p>
              <p className="mt-1 text-sm font-light leading-none text-left text-[#152C5B]">Bogor, Indonesia</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative rounded-[15px]">
            <img src="/images/scattle.svg" className="w-full h-56 rounded-[15px] object-cover" alt="scattle" />
            <div className="mt-2">
              <p className="text-lg font-medium leading-none text-left text-[#152C5B]">Seattle Rain</p>
              <p className="mt-1 text-sm font-light leading-none text-left text-[#152C5B]">Jakarta, Indonesia</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative rounded-[15px]">
            <img src="/images/wood.svg" className="w-full h-56 rounded-[15px] object-cover" alt="wooden Pit" />
            <div className="mt-2">
              <p className="text-lg font-medium leading-none text-left text-[#152C5B]">Wooden Pit</p>
              <p className="mt-1 text-sm font-light leading-none text-left text-[#152C5B]">Wonosobo, Indonesia</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BackYard;