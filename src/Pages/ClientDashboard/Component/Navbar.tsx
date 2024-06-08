import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import Notification from "./Notification";
import Bids from "./Bid";
import Jobs from "./Jobs";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="flex items-center justify-between">
        <div className="ml-12 font-logoFonts text-3xl text-[#32CD32]">
          Workifyy
        </div>
        <div className="flex items-center space-x-2">
          <Bids />
          <Jobs />
          <Link to="/wallet" className="px-4 py-2 text-lg hover:underline">
            Wallet
          </Link>
          <div className="relative">
            <Notification />
          </div>
          <Link
            to="/profile"
            className="flex items-center px-4 py-2 text-lg hover:underline"
          >
            <FaUserAlt
              className="cursor-pointer text-white hover:text-gray-400"
              size={24}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
