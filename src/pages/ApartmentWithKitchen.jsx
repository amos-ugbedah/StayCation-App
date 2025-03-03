// src/pages/ApartmentWithKitchen.jsx
import PropertyList from '../components/PropertyList';

const kitchenProperties = [
  {
    name: 'PS Wood',
    location: 'Depok, Indonesia',
    image: '/images/Ps Wood.svg',
    popular: false,
  },
  {
    name: 'One Five',
    location: 'Jakarta, Indonesia',
    image: '/images/One Five.svg',
    popular: false,
  },
  {
    name: 'Minimal',
    location: 'Bogor, Indonesia',
    image: '/images/Minimal1.svg',
    popular: true,
  },
  {
    name: 'Stays Home',
    location: 'Wonosobo, Indonesia',
    image: '/images/stays.svg',
    popular: false,
  },
];

const ApartmentWithKitchen = () => {
  return <PropertyList title="Apartment with Kitchen" properties={kitchenProperties} />;
};

export default ApartmentWithKitchen;
