// src/pages/HotelWithLivingRoom.jsx
import PropertyList from '../components/PropertyList';

const livingRoomProperties = [
  {
    name: 'Green Park',
    location: 'Tangerang, Indonesia',
    image: '/images/Green Park.svg',
    popular: true,
  },
  {
    name: 'Podo Wae',
    location: 'Madiun, Indonesia',
    image: '/images/Podo Waes.svg',
    popular: false,
  },
  {
    name: 'Silver Rain',
    location: 'Bandung, Indonesia',
    image: '/images/Silver.svg',
    popular: false,
  },
  {
    name: 'Cashville',
    location: 'Kemang, Indonesia',
    image: '/images/Cashville.svg',
    popular: false,
  },
];

const HotelWithLivingRoom = () => {
  return <PropertyList title="Hotel with Living Room" properties={livingRoomProperties} />;
};

export default HotelWithLivingRoom;
