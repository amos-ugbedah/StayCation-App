// src/pages/BackYard.jsx
import PropertyList from '../components/PropertyList';

const backyardProperties = [
  {
    name: 'Tabby Town',
    location: 'Gunug Batu, Indonesia',
    image: '/images/Tabby.svg',
    popular: true,
  },
  {
    name: 'Anggana',
    location: 'Bogor, Indonesia',
    image: '/images/Anggaga.svg',
    popular: false,
  },
  {
    name: 'Seattle Rain',
    location: 'Jakarta, Indonesia',
    image: '/images/scattle.svg',
    popular: false,
  },
  {
    name: 'Wooden Pit',
    location: 'Wonosobo, Indonesia',
    image: '/images/wood.svg',
    popular: false,
  },
];

const BackYard = () => {
  return <PropertyList title="Houses with Backyard" properties={backyardProperties} />;
};

export default BackYard;
