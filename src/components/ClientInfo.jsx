const ClientInfo = ({ className }) => {
  return (
    <div className={`flex flex-col items-start w-full max-w-[320px] mx-auto ${className}`}>
      {/* First Name */}
      <div className="w-full">
        <label className="font-poppins text-[18px] font-medium leading-[30.6px] text-left">First Name</label>
        <input type="text" placeholder="Ihsan" className="w-full h-[51.56px] p-2 mt-1 border border-gray-300 rounded-tl-[4px] rounded-br-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
      </div>
      {/* Last Name */}
      <div className="w-full mt-4">
        <label className="font-poppins text-[18px] font-medium leading-[30.6px] text-left">Last Name</label>
        <input type="text" placeholder="Adi" className="w-full h-[51.56px] p-2 mt-1 border border-gray-300 rounded-tl-[4px] rounded-br-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
      </div>
      {/* Email */}
      <div className="w-full mt-4">
        <label className="font-poppins text-[18px] font-medium leading-[30.6px] text-left">Email</label>
        <input type="email" placeholder="bwa@class.com" className="w-full h-[51.56px] p-2 mt-1 border border-gray-300 rounded-tl-[4px] rounded-br-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
      </div>
      {/* Phone Number */}
      <div className="w-full mt-4">
        <label className="font-poppins text-[18px] font-medium leading-[30.6px] text-left">Phone Number</label>
        <input type="text" placeholder="0812735810231" className="w-full h-[51.56px] p-2 mt-1 border border-gray-300 rounded-tl-[4px] rounded-br-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
      </div>
    </div>
  );
};

export default ClientInfo;