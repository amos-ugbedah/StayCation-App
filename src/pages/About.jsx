import Breadcrumb from '../components/Breadcrumb';
import Gallery from '../components/Gallery';
import AboutPlace from '../components/AboutPlace';
import BookingSection from '../components/BookingSection';
import ThingsToDo from '../components/ThingsToDo';
import HappyFamily1 from '../components/HappyFamily1';

const About = () => {
  return (
    <main className="mt-10 mx-auto w-full px-4 md:px-10 lg:px-20">
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
        <h5 className="w-[149px] h-[36px] absolute top-2 left-2 font-poppins text-[24px] font-medium leading-[36px] text-left text-[#152C5B]">
          Things to do
        </h5>
        <ThingsToDo />
      </section>
      <section className="w-full h-auto relative ml-2 mb-0 mt-24">
        <HappyFamily1 />
      </section>
    </main>
  );
};

export default About;