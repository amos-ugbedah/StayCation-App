const MostPicked = () => {
  const properties = [
    {
      id: 1,
      name: "Finns Beach Club",
      location: "Denpasar, Bali",
      price: 50,
      image: "/images/finns.svg",
      isMain: true,
    },
    {
      id: 2,
      name: "Montigo Resort",
      location: "Rio De Janeiro, Brazil",
      price: 22,
      image: "/images/Rio.svg",
    },
    {
      id: 3,
      name: "Montana Bay",
      location: "Berlin, Germany",
      price: 858,
      image: "/images/Montana.svg",
    },
    {
      id: 4,
      name: "Kalpa Tree",
      location: "Ternate, Nusa Tenggara Barat",
      price: 62,
      image: "/images/Knipa.svg",
    },
    {
      id: 5,
      name: "Caesar Palace",
      location: "Las Vegas, America",
      price: 72,
      image: "/images/caesar.svg",
    },
  ];

  return (
    <div className="w-full mx-auto px-20">
      <section className="relative mt-10 mb-0 max-w-full">
        <h4 className="text-2xl font-medium text-left text-[#152C5B]">
          Most Picked
        </h4>
        <div className="mt-16 lg:mt-8 lg:flex lg:space-x-4">
          {/* Main Image */}
          {properties.filter((prop) => prop.isMain).map((mainProp) => (
            <div key={mainProp.id} className="relative w-full lg:w-[360px] lg:h-[460px]">
              <img
                src={mainProp.image}
                className="w-full h-full object-cover rounded-[15px]"
                alt={mainProp.name}
              />
              <p className="absolute top-0 right-0 p-2 text-sm font-medium text-white bg-[#FF498B] rounded-tr-[15px] rounded-bl-[15px]">
                ${mainProp.price} per night
              </p>
              <div className="absolute bottom-4 left-4">
                <p className="text-lg font-medium text-left text-[#152C5B]">
                  {mainProp.name}
                </p>
                <p className="mt-1 text-sm font-light text-left text-[#152C5B]">
                  {mainProp.location}
                </p>
              </div>
            </div>
          ))}

          {/* Additional Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 lg:mt-0 lg:flex-1">
            {properties
              .filter((prop) => !prop.isMain)
              .map((prop) => (
                <div
                  key={prop.id}
                  className="relative w-full h-[215px] bg-gradient-to-b from-transparent via-[rgba(196,196,196,0.5)] to-[rgba(196,196,196,0.5)] rounded-[15px]"
                >
                  <img
                    src={prop.image}
                    className="absolute inset-0 w-full h-full rounded-[15px] object-cover"
                    alt={prop.name}
                  />
                  <p className="absolute top-0 right-0 p-2 text-sm font-medium text-white bg-[#FF498B] rounded-tr-[15px] rounded-bl-[15px]">
                    ${prop.price} per night
                  </p>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-lg font-medium text-left text-[#152C5B]">
                      {prop.name}
                    </p>
                    <p className="mt-1 text-sm font-light text-left text-[#152C5B]">
                      {prop.location}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MostPicked;
