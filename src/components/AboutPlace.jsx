const AboutPlace = () => {
  return (
    <div className="w-full h-auto p-4">
      <h5 className="font-medium text-[24px] leading-[36px] text-[#152C5B]">About the place</h5>
      <p className="mt-2 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum augue sed mi placerat, at ultrices elit aliquet. Quisque sit amet eros ut justo tincidunt cursus.
        <br /><br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br /><br />
        Design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product, or process.
      </p>
      <div className="grid grid-cols-4 gap-4 mt-5">
        <div className="flex flex-col items-center">
          <img src="/images/bedroom.svg" className="w-[38px] h-[38px]" alt="bedroom" />
          <p className="text-center mt-1">3 <span className="text-sm">bedrooms</span></p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/livingroom.svg" className="w-[38px] h-[38px]" alt="livingroom" />
          <p className="text-center mt-1">1 <span className="text-sm">living room</span></p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/bathroom.svg" className="w-[38px] h-[38px]" alt="bathroom" />
          <p className="text-center mt-1">3 <span className="text-sm">bathrooms</span></p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/diningroom.svg" className="w-[38px] h-[38px]" alt="diningroom" />
          <p className="text-center mt-1">1 <span className="text-sm">dining room</span></p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/wifi.svg" className="w-[38px] h-[38px]" alt="wifi" />
          <p className="text-center mt-1">10 <span className="text-sm">mbp/s</span></p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/unit ready.svg" className="w-[38px] h-[38px]" alt="unit ready" />
          <p className="text-center mt-1">2 <span className="text-sm">unit ready</span></p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/refrigerators.svg" className="w-[38px] h-[38px]" alt="refrigerators" />
          <p className="text-center mt-1">2 <span className="text-sm">refrigerators</span></p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/tv.svg" className="w-[38px] h-[38px]" alt="tv" />
          <p className="text-center mt-1">4 <span className="text-sm">television</span></p>
        </div>
      </div>
    </div>
  );
};

export default AboutPlace;