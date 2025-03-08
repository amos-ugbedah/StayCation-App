import { useParams, useNavigate } from "react-router-dom";
import properties from "../constants/properties";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) return <h2>Property not found</h2>;

  return (
    <div className="container mx-auto px-10 py-10">
      <button className="bg-gray-300 px-4 py-2 rounded" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="mt-6">
        <img src={property.image} className="w-full max-h-[500px] object-cover rounded-lg" alt={property.name} />
        <h2 className="text-3xl font-bold mt-4">{property.name}</h2>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-xl text-green-500 mt-2">${property.price} per night</p>
        <p className="mt-4">{property.description}</p>
      </div>
    </div>
  );
};

export default DetailPage;
