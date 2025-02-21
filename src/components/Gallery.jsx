const Gallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
      <div className="w-full h-[500px] rounded-[15px]">
        <img src="/images/about1.svg" alt="about1" className="w-full h-full object-cover rounded-[15px]" />
      </div>
      <div className="w-full h-full flex flex-col mt-4 rounded-[15px] md:mt-0 md:ml-4">
        <img src="/images/about2.svg" className="w-full h-full object-cover mb-2 rounded-[15px]" alt="About2" />
        <img src="/images/about3.svg" className="w-full h-full object-cover mt-2 rounded-[15px]" alt="About3" />
      </div>
    </div>
  );
};

export default Gallery;