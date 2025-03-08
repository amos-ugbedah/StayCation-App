import { Link } from "react-router-dom";
import propertyData from "../constants/propertyData";

const PropertySection = () => {
  return (
    <div className="mt-20 px-20">
      {propertyData.map((category, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-bold text-[#152C5B] mb-5">{category.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.properties.map((property, idx) => (
              <Link
                to={`/property/${property.name.replace(/\s+/g, "-").toLowerCase()}`}
                key={idx}
                className="border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-xl transition"
              >
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-2">{property.name}</h3>
                <p className="text-sm text-gray-600">{property.location}</p>
                <p className="text-md font-bold text-[#3252DF] mt-2">{property.price}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertySection;
