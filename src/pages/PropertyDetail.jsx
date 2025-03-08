/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import propertyData from "../constants/propertyData";

const PropertyDetail = () => {
  const { propertyName } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [allProperties, setAllProperties] = useState([]);

  useEffect(() => {
    const propertiesList = propertyData.flatMap(category => category.properties);
    setAllProperties(propertiesList);
    const index = propertiesList.findIndex(
      property => property.name.replace(/\s+/g, "-").toLowerCase() === propertyName
    );
    setCurrentIndex(index);
  }, [propertyName]);

  if (currentIndex === -1 || !allProperties.length) {
    return <h2 className="text-center mt-20 text-2xl font-bold">Property Not Found</h2>;
  }

  const selectedProperty = allProperties[currentIndex];

  const goBack = () => navigate(-1);
  const goToNext = () => {
    if (currentIndex < allProperties.length - 1) {
      const nextProperty = allProperties[currentIndex + 1];
      navigate(`/property/${nextProperty.name.replace(/\s+/g, "-").toLowerCase()}`);
    }
  };
  const goToPrevious = () => {
    if (currentIndex > 0) {
      const prevProperty = allProperties[currentIndex - 1];
      navigate(`/property/${prevProperty.name.replace(/\s+/g, "-").toLowerCase()}`);
    }
  };

  return (
    <div className="px-20 py-10">
      <div className="flex justify-between items-center mb-6">
        <button onClick={goBack} className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg">Back</button>
        {currentIndex > 0 && (
          <button onClick={goToPrevious} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Previous</button>
        )}
        {currentIndex < allProperties.length - 1 && (
          <button onClick={goToNext} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Next</button>
        )}
      </div>

      <h1 className="text-3xl font-bold text-[#152C5B]">{selectedProperty.name}</h1>
      <p className="text-lg text-gray-600">{selectedProperty.location}</p>
      <img src={selectedProperty.image} alt={selectedProperty.name} className="w-full h-96 object-cover rounded-lg mt-4" />
      <h2 className="text-2xl font-bold mt-6">About This Place</h2>
      <p className="text-md text-gray-700 mt-2">{selectedProperty.description}</p>
      <h3 className="text-lg font-semibold mt-4">Price: <span className="text-[#3252DF]">{selectedProperty.price}</span></h3>
      <h3 className="text-lg font-semibold mt-2">Duration: {selectedProperty.duration}</h3>
      <h3 className="text-lg font-semibold mt-4">Features:</h3>
      <ul className="list-disc pl-6">
        {selectedProperty.features?.map((feature, index) => (
          <li key={index} className="text-md text-gray-600">{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyDetail;
