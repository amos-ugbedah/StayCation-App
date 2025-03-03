import MostPicked from '../components/MostPicked';
import BackYard from './BackYard';
import HotelWithLivingRoom from './HotelWithLivingRoom';
import ApartmentWithKitchen from './ApartmentWithKitchen';
import HappyFamily from '../components/HappyFamily';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div className="px-20">
      <HeroSection />
      <MostPicked />
      <BackYard />
      <HotelWithLivingRoom />
      <ApartmentWithKitchen />
      <HappyFamily />
    </div>
  );
};

export default Home;