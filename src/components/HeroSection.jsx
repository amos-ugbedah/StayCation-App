const HeroSection = () => {
    return (
      <main className="px-20 mt-10 mx-auto max-w-full">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-[32px] md:text-[42px] font-bold leading-[48px] md:leading-[63px] text-[#183369]">
              Forget Your Main Work, Start Holiday Now!
            </h1>
            <p className="text-[16px] md:text-[18px] font-light leading-[24px] md:leading-[30.6px] text-[#B0B0B0] mt-6">
              We provide you what you need to enjoy your holiday with family. Time to make another memorable moment.
            </p>
            <button className="w-full md:w-[210px] h-[50px] bg-blue-500 text-white font-bold py-2 px-4 rounded mt-8 transition duration-300 ease-in-out transform hover:scale-105">
              Show Me Now
            </button>
            <div className="w-full md:w-[464px] grid grid-cols-3 gap-4 mt-12 md:mt-32">
              <div className="flex flex-col items-center">
                <img src="/images/ic_traveler.svg" alt="travelers" />
                <p>
                  <span className="font-medium">80,409</span> travelers
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/ic_cities.svg" alt="cities" />
                <p>
                  <span className="font-medium">1,492</span> cities
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/ic_treasures.svg" alt="treasures" />
                <p>
                  <span className="font-medium">862</span> treasures
                </p>
              </div>
            </div>
          </div>
          <div className="sm:order-last lg:order-last flex justify-center mt-10 lg:mt-0">
            <div className="w-full md:w-[559px] h-[496px] rounded-tl-[5rem] rounded-tr-[15px] rounded-br-[15px] rounded-bl-[15px] border-t border border-gray-300">
              <img src="/images/image 3.svg" className="rounded-tl-[5rem]" alt="image3" />
            </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default HeroSection;