const Circle = () => {
  return (
    <section className="flex items-center justify-center w-full mt-8">
      <div className="relative flex items-center justify-between w-[275px] h-[60px]">
        {/* Circle 1 */}
        <div className="flex items-center justify-center w-[60px] h-[60px] border border-[#E5E5E5] rounded-full bg-white z-10">
          <span className="font-poppins text-[24px] font-medium leading-[36px] text-[#898989]">
            1
          </span>
        </div>
        {/* Circle 2 */}
        <div className="flex items-center justify-center w-[60px] h-[60px] border border-[#E5E5E5] rounded-full bg-white z-10">
          <span className="font-poppins text-[24px] font-medium leading-[36px] text-[#898989]">
            2
          </span>
        </div>
        {/* Circle 3 */}
        <div className="flex items-center justify-center w-[60px] h-[60px] border border-[#E5E5E5] rounded-full bg-white z-10">
          <span className="font-poppins text-[24px] font-medium leading-[36px] text-[#898989]">
            3
          </span>
        </div>
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-0 w-full border-t border-[#E5E5E5]"></div>
      </div>
    </section>
  );
};

export default Circle;
