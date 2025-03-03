import { useNavigate } from "react-router-dom";

const Buttons = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/payment");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <section className="flex flex-col items-center mt-12 mb-4">
      {/* Button 1 */}
      <button
        onClick={handleContinue}
        className="w-[210px] h-[50px] bg-[#3252DF] rounded-[4px] shadow-lg mb-4"
      >
        <span className="font-poppins text-[18px] font-medium leading-[30.6px] text-white">
          Continue to Book
        </span>
      </button>
      {/* Button 2 */}
      <button
        onClick={handleCancel}
        className="w-[210px] h-[50px] bg-[#cdcdce] rounded-[4px] shadow-lg"
      >
        <span className="font-poppins text-[18px] font-medium leading-[30.6px] text-[#F5f6f8]">
          Cancel
        </span>
      </button>
    </section>
  );
};

export default Buttons;
