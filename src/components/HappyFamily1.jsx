const HappyFamily1 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
      <div className="relative w-full h-[541px] border border-solid border-[#E5E5E5] rounded-tr-[15px] rounded-br-[15px] p-[1px]">
        <img
          src="/images/happy1.svg"
          className="w-full h-full rounded-tr-[15px] rounded-br-[15px]"
          alt="Happy Family"
        />
      </div>
      <div className="relative w-full h-auto p-4">
        <h5 className="text-[24px] font-normal leading-[36px] text-[#152C5B]">
          Happy Family
        </h5>
        <div className="flex space-x-1 mt-4">
          <img src="/images/Star.svg" alt="star" />
          <img src="/images/Star.svg" alt="star" />
          <img src="/images/Star.svg" alt="star" />
          <img src="/images/Star.svg" alt="star" />
          <img src="/images/Star.svg" alt="star" />
        </div>
        <p className="text-[27px] font-normal leading-10 mt-8 text-[#152C5B]">
          As a wife I can pick a great trip with my own lovely family ... thank
          you!
        </p>
        <p className="text-[18px] font-extralight leading-[20px] text-[#152C5B] mt-2">
          Megan, Product Manager
        </p>
        <button className="w-[210px] h-[50px] bg-[#3252DF] rounded-[4px] shadow-lg mt-14">
          <span className="text-[18px] font-medium leading-[30.6px] text-white">
            Read Our Stories
          </span>
        </button>
      </div>
    </div>
  );
};

export default HappyFamily1;
