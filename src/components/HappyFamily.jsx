const HappyFamily = ({ title, description, author, image }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-20">
      {/* Image Section */}
      <div className="relative w-full h-[541px] border border-solid border-[#E5E5E5] rounded-tr-[15px] rounded-br-[15px] p-[1px]">
        <img
          src={image}
          className="w-full h-full rounded-tr-[15px] rounded-br-[15px] object-cover"
          alt={title}
        />
      </div>

      {/* Text Section */}
      <div className="relative w-full h-auto p-4">
        <h5 className="text-[24px] font-normal leading-[36px] text-[#152C5B]">
          {title}
        </h5>
        <div className="flex space-x-1 mt-4">
          {/* ✅ Keeping the 5-star rating */}
          {Array(5).fill().map((_, i) => (
            <img key={i} src="/images/Star.svg" alt="star" />
          ))}
        </div>
        <p className="text-[27px] font-normal leading-10 mt-8 text-[#152C5B]">
          {description}
        </p>
        <p className="text-[18px] font-extralight leading-[20px] text-[#152C5B] mt-2">
          {author}
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

export default HappyFamily;
