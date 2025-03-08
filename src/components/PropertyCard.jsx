const PropertyCard = ({ name, location, price, imageUrl }) => {
    return (
      <div className="border p-4 rounded-lg shadow-md">
        <img src={imageUrl} alt={name} className="w-full h-40 object-cover rounded-lg" />
        <h2 className="text-lg font-semibold mt-2">{name}</h2>
        <p className="text-gray-600">{location}</p>
        <p className="text-blue-500 font-bold">{price}</p>
      </div>
    );
  };
  
  export default PropertyCard;
  