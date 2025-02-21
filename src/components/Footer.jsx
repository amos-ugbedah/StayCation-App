import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="w-full mt-24 border-t border-gray-500">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 place-items-center max-w-screen-lg mx-auto">
          <div>
            <h5 className="font-medium mt-4"><span className="text-blue-600">Stay</span>cation.</h5>
            <p className="w-full text-[#B0B0B0] font-poppins text-[18px] font-light leading-[27px] text-left mt-2">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>

          <div>
            <h5 className="font-poppins text-[18px] font-normal leading-[27px] text-left text-[#152C5B] mt-4">For Beginners</h5>
            <menu className="text-[#B0B0B0] font-poppins text-[16px] font-light leading-[24px] text-left">
              <Link to="/" className="block mt-2">New Account</Link>
              <Link to="/booking" className="block mt-1">Book a Room</Link>
              <Link to="/payment" className="block mt-1">Payments</Link>
            </menu>
          </div>

          <div>
            <h5 className="font-poppins text-[18px] font-normal leading-[27px] text-left text-[#152C5B] mt-4">Explore Us</h5>
            <menu className="text-[#B0B0B0] font-poppins text-[16px] font-light leading-[24px] text-left">
              <Link to="/about" className="block mt-2">About</Link>
              <Link to="#" className="block mt-1">Privacy Policy</Link>
              <Link to="#" className="block mt-1">Terms & Conditions</Link>
            </menu>
          </div>

          <div>
            <h5 className="font-poppins text-[15px] font-normal leading-[25px] text-left text-[#152C5B] mt-4">Getting Touch</h5>
            <menu className="text-[#B0B0B0] font-poppins text-[16px] font-light leading-[24px] text-left">
              <Link to="#" className="block mt-2">support@stayctation.id</Link>
              <Link to="#" className="block mt-1">021 - 2208 - 1996</Link>
              <Link to="#" className="block mt-1">Staycation Oy, Jakarta</Link>
            </menu>
          </div>
        </div>

        <p className="w-full text-[#B0B0B0] font-poppins text-[18px] font-light leading-[27px] text-center mt-10">
          Copyright 2025. All rights reserved. Staycation.
        </p>
      </footer>
    </div>
  );
};

export default Footer;