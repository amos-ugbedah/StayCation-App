const thingsToDoList = [
  {
    name: 'Tabby Town',
    category: 'Nature',
    image: '/images/Tabby town.svg',
  },
  {
    name: 'Dog Club',
    category: 'Pool',
    image: '/images/Dog club.svg',
  },
  {
    name: 'Labour and Wait',
    category: 'Shopping',
    image: '/images/labour and wait.svg',
  },
  {
    name: 'Snorkeling',
    category: 'Beach',
    image: '/images/snork.svg',
  },
];

const ThingsToDo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 mt-10">
      {thingsToDoList.map((item, index) => (
        <div key={index} className="relative w-full h-auto rounded-[15px] flex flex-col items-start">
          <img src={item.image} className="w-full h-[180px] rounded-[15px]" alt={item.name} />
          <div className="mt-1 w-full px-1">
            <p className="text-[20px] font-medium leading-[30px] text-left text-[#152C5B]">{item.name}</p>
            <p className="text-[15px] font-light leading-[22.5px] text-left text-[#152C5B] mt-1">{item.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThingsToDo;