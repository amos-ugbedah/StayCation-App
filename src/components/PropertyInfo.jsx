const PropertyInfo = ({ className }) => {
  return (
    <div className={`relative w-full max-w-[264.07px] h-[258px] rounded-[15px] mx-auto ${className}`}>
      <menu>
        <li className="text-[18px] font-light leading-[30.6px]">Transfer Payment:</li>
        <li className="text-[16px] font-light leading-[30.6px]">Tax 10%:</li>
        <li className="text-[16px] font-light leading-[30.6px]">Sub total: <span className="font-medium">$480 USD</span></li>
        <li className="text-[16px] font-light leading-[30.6px]">Total: <span className="font-medium">$580 USD</span></li>
      </menu>
      <div className="mt-2 flex justify-between items-center flex-col">
        <div className="flex items-center">
          <img src="/images/Bank central Asian.svg" alt="Bank Central Asian" className="w-[60px] h-[35px] mr-4 self-start" />
          <ul className="flex flex-col">
            <li className="text-[18px] font-light leading-[30.6px]">Bank Central Asia</li>
            <li className="text-[18px] font-light leading-[30.6px]">2208 1996</li>
            <li className="text-[18px] font-light leading-[30.6px]">Tesla Inc.</li>
          </ul>
        </div>
        <div className="flex items-center mt-4">
          <img src="/images/Bank Mandiri.svg" alt="Bank Mandiri" className="w-[60px] h-[35px] mr-4 self-start" />
          <ul className="flex flex-col">
            <li className="text-[18px] font-light leading-[30.6px]">Bank Mandiri</li>
            <li className="text-[18px] font-light leading-[30.6px]">2208 1996</li>
            <li className="text-[18px] font-light leading-[30.6px]">Tesla Inc.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;