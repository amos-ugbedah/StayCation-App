import { Link } from 'react-router-dom';

const Breadcrumb = () => {
  return (
    <div className="flex items-center w-full text-[18px] leading-[27px] font-normal">
      <Link to="/">Home</Link> / <span className="font-semibold">House Details</span>
    </div>
  );
};

export default Breadcrumb;