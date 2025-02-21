
const HappyFamily = () => {
  return (
    <div>
      <section className="relative mt-10 mb-0 max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16 place-items-center">
          <div className="relative w-full max-w-md lg:max-w-none lg:w-[405px] h-[541px] border border-solid border-[#E5E5E5] rounded-tr-[15px] rounded-br-[15px] p-1">
            <img src="/images/again.png" className="w-full h-full rounded-tr-[15px] rounded-br-[15px]" alt="Happy Family" />
          </div>
          
          <div className="w-full max-w-lg lg:max-w-none">
            <div className="text-left text-[#152C5B] mt-4 lg:mt-0">
              <h4 className="text-2xl font-medium">Happy Family</h4>
              <div className="flex space-x-1 mt-4">
                <img src="/images/Star.svg" alt="star" />
                <img src="/images/Star.svg" alt="star" />
                <img src="/images/Star.svg" alt="star" />
                <img src="/images/Star.svg" alt="star" />
                <img src="/images/Star.svg" alt="star" />
              </div>
              
              <p className="text-xl font-normal leading-10 mt-4">
                What a great trip with my family and I should try again next time soon...
              </p>
              <p className="text-lg font-light mt-2">
                Adi, UI/UX Designer
              </p>
              <button className="w-[210px] h-[50px] bg-[#3252DF] rounded mt-6 shadow-lg">
                <span className="text-lg font-medium text-white">Read Our Stories</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HappyFamily;