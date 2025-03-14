import Breadcrumb from "../components/Breadcrumb";
import Gallery from "../components/Gallery";
import AboutPlace from "../components/AboutPlace";
import BookingSection from "../components/BookingSection";
import ThingsToDo from "../components/ThingsToDo";
import HappyFamily from "../components/HappyFamily";
import happyFamilyData from "../constants/happyFamilyData"; // ✅ Import the constant data

const About = () => {
  return (
    <main className="mt-10 mx-auto w-full max-w-full px-20">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Breadcrumb />
      </section>
      <section className="w-full h-auto relative mb-0 mx-auto rounded-[15px] mt-10 flex flex-col md:flex-row">
        <Gallery />
      </section>
      <section className="w-full h-auto relative mx-auto rounded-[15px] mt-10 flex flex-col md:flex-row">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
          <AboutPlace />
          <BookingSection />
        </div>
      </section>
      <section className="w-full h-auto relative mx-auto mt-10 flex flex-col">
        <h5 className="w-full font-poppins text-[24px] font-medium leading-[36px] text-left text-[#152C5B]">
          Things To Do
        </h5>
        <div className="mt-4">
          <ThingsToDo />
        </div>
      </section>

      {/* ✅ About HappyFamily Section */}
      <HappyFamily {...happyFamilyData.about} />
    </main>
  );
};

export default About;
