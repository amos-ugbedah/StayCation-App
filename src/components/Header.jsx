import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full border-b border-black">
      <header className="bg-white text-gray-900 flex justify-between items-center p-4 max-w-full mx-2 md:mx-auto lg:mx-10">
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" className="ml-2 mr-2 md:ml-0 md:mr-0 lg:ml-10 lg:mr-10" />
        </Link>

        {/* navRight */}
        <nav className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 ml-2 mr-2 md:ml-0 md:mr-0 lg:ml-10 lg:mr-10">
          <Link to="/" className="relative text-blue-700">Home</Link>
          <Link to="/browse" className="relative">Browse by</Link>
          <Link to="/stories" className="relative">Stories</Link>
          <Link to="/agents" className="relative">Agents</Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;