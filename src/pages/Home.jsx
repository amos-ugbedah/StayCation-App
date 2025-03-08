import HeroSection from "../components/HeroSection";
import MostPicked from "../components/MostPicked";
import HappyFamily from "../components/HappyFamily";
import PropertySection from "../components/PropertySection";
import happyFamilyData from "../constants/happyFamilyData"; // ✅ Import constant data

const Home = () => {
  return (
    <main className="px-20 space-y-10">
      <HeroSection />
      <MostPicked /> {/* ✅ Shows "Most Picked" section */}
      <PropertySection /> {/* ✅ Displays property listings */}

      {/* ✅ Renders "Happy Family" section only if data is available */}
      {happyFamilyData?.home && <HappyFamily {...happyFamilyData.home} />}
    </main>
  );
};

export default Home;
