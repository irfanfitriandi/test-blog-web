import { Link } from "react-router-dom";

import { BsSearch, BsMedium, BsInstagram, BsTwitter } from "react-icons/bs";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-16 p-2 lg:px-10">
      <div className="text-xs lg:text-base space-x-2 lg:space-x-4 font-semibold">
        <span className="cursor-pointer">Write</span>
        <span className="cursor-pointer">Sign In</span>
      </div>
      <Link className="text-3xl lg:text-4xl font-extrabold" to="/">
        DaBBa
      </Link>
      <div className="flex space-x-2 lg:space-x-4 text-sm lg:text-lg">
        <BsMedium className="cursor-pointer" />
        <BsInstagram className="cursor-pointer" />
        <BsTwitter className="cursor-pointer" />
        <BsSearch className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
