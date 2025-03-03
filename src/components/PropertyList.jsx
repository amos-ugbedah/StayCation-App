// src/components/PropertyList.jsx

const PropertyList = ({ title, properties }) => {
  return (
    <div className="w-full mx-auto">
      <section className="relative mt-10 mb-0 mx-10 md:mx-auto lg:mx-10 max-w-full">
        <h4 className="col-span-1 md:col-span-2 lg:col-span-4 text-2xl font-medium text-left text-[#152C5B]">{title}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 place-items-center">
          {properties.map((property, index) => (
            <div key={index} className="relative rounded-[15px]">
              <img src={property.image} className="w-full h-56 rounded-[15px] object-cover" alt={property.name} />
              {property.popular && (
                <p className="absolute top-0 right-0 p-2 text-sm font-medium leading-none text-white bg-[#FF498B] rounded-tr-[15px] rounded-bl-[15px]">Popular Choice</p>
              )}
              <div className="mt-2">
                <p className="text-lg font-medium leading-none text-left text-[#152C5B]">{property.name}</p>
                <p className="mt-1 text-sm font-light leading-none text-left text-[#152C5B]">{property.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PropertyList;
