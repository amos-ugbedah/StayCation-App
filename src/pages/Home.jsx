import MostPicked from '../components/MostPicked';
import BackYard from '../components/BackYard';
import HotelsWithLivingRoom from '../components/HotelsWithLivingRoom';
import ApartmentWithKitchen from '../components/ApartmentWithKitchen';
import HappyFamily from '../components/HappyFamily';

const Home = () => {
  return (
    <div>
      <MostPicked />
      <BackYard />
      <HotelsWithLivingRoom />
      <ApartmentWithKitchen />
      <HappyFamily />
    </div>
  );
};

export default Home;