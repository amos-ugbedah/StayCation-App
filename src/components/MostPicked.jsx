const MostPicked = () => {
  return (
    <div className="w-full mx-auto px-20">
      <section className="relative mt-10 mb-0 max-w-full">
        <h4 className="text-2xl font-medium text-left text-[#152C5B]">Most Picked</h4>
        <div className="mt-16 lg:mt-8 lg:flex lg:space-x-4">
          {/* Main Image */}
          <div className="relative w-full lg:w-[360px] lg:h-[460px]">
            <img src="/images/finns.svg" className="w-full h-full object-cover rounded-[15px]" alt="finns" />
            <p className="absolute top-0 right-0 p-2 text-sm font-medium leading-none text-white bg-[#FF498B] rounded-tr-[15px] rounded-bl-[15px]">$50 per night</p>
            <div className="absolute bottom-4 left-4">
              <p className="text-lg font-medium leading-none text-left text-[#152C5B]">Finns Beach Club</p>
              <p className="mt-1 text-sm font-light leading-none text-left text-[#152C5B]">Denpasar, Bali</p>
            </div>
          </div>

          {/* Additional Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 lg:mt-0 lg:flex-1">
            {/* img1 */}
            <div className="relative w-full h-[215px] bg-gradient-to-b from-transparent via-[rgba(196,196,196,0.5)] to-[rgba(196,196,196,0.5)] rounded-[15px]">
              <img src="/images/Rio.svg" className="absolute inset-0 w-full h-full rounded-[15px] object-cover" alt="Rio" />
              <p className="absolute top-0 right-0 p-2 text-sm font-medium leading-none text-white bg-[#FF498B] rounded-tr-[15px] rounded-bl-[15px]">$22 per night</p>
              <div className="absolute bottom-4 left-4">
                <p className="text-lg font-medium leading-none text-left text-[#152C5B]">Montigo Resort</p>
                <p className="mt-1 text-sm font-light leading-none text-left text-[#152C5B]">Rio De Janeiro, Brazil</p>
              </div>
            </div>
            {/* img2 */}
            <div className="relative w-full h-[215px] bg-gradient-to-b from-transparent via-[rgba(196,196,196,0.5)] to-[rgba(196,196,196,0.5)] rounded-[15px]">
              <img src="/images/Montana.svg" className="absolute inset-0 w-full h-full rounded-[15px] object-cover" alt="Montana" />
              <p className="absolute top-0 right-0 p-2 text-sm font-medium leading-none text-white bg-[#FF498B] rounded-tr-[15px] rounded-bl-[15px]">$858 per night</p>
              <div className="absolute bottom-4 left-4">
                <p className="text-lg font-medium leading-none text-left text-[#152C5B]">Montana Bay</p>
                <p className="mt-1 text-sm font-light leading-none text-left text-[#152C5B]">Berlin, Germany</p>
              </div>
            </div>
            {/* img3 */}
            <div className="relative w-full h-[215px] mt-10 lg:mt-0 bg-gradient-to-b from-transparent via-[rgba(196,196,196,0.5)] to-[rgba(196,196,196,0.5)] rounded-[15px]">
              <img src="/images/Knipa.svg" className="absolute inset-0 w-full h-full rounded-[15px] object-cover" alt="Kalpa" />
              <p className="absolute top-0 right-0 p-2 text-sm font-medium leading-none text-white bg-[#FF498B] rounded-tr-[15px] rounded-bl-[15px]">$62 per night</p>
              <div className="absolute bottom-4 left-4">
                <p className="text-lg font-medium leading-none text-left text-[#152C5B]">Kalpa Tree</p>
                <p className="mt-1 text-sm font-light leading-none text-left text-[#152C5B]">Ternate, Nusa Tenggara Barat</p>
              </div>
            </div>
            {/* img4 */}
            <div className="relative w-full h-[215px] mt-10 lg:mt-0 bg-gradient-to-b from-transparent via-[rgba(196,196,196,0.5)] to-[rgba(196,196,196,0.5)] rounded-[15px]">
              <img src="/images/caesar.svg" className="absolute inset-0 w-full h-full rounded-[15px] object-cover" alt="caesar" />
              <p className="absolute top-0 right-0 p-2 text-sm font-medium leading-none text-white bg-[#FF498B] rounded-tr-[15px] rounded-bl-[15px]">$72 per night</p>
              <div className="absolute bottom-4 left-4">
                <p className="text-lg font-medium leading-none text-left text-[#152C5B]">Caesar Palace</p>
                <p className="mt-1 text-sm font-light leading-none text-left text-[#152C5B]">Las Vegas, America</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MostPicked;