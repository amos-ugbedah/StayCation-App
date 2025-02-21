import { useNavigate } from 'react-router-dom';

const BackHomeButton = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <section className="flex flex-col items-center mt-12 mb-4">
      <p className="w-[382px] h-[64px] text-[18px] font-light leading-[27px] text-center mb-4">
        We will inform you via email later <br />
        once this transaction has been accepted
      </p>
      {/* Button 1 */}
      <button
        onClick={handleBackHome}
        className="w-[210px] h-[50px] bg-[#3252DF] rounded-[4px] shadow-lg mb-4"
      >
        <span className="font-poppins text-[18px] font-medium leading-[30.6px] text-white">
          Back Home
        </span>
      </button>
    </section>
  );
};

export default BackHomeButton;