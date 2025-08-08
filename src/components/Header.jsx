import { useState } from "react";
import binancelogo from "/binancelogo.png";

import { Link } from "react-router-dom";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="w-full bg-white shadow-md">
        <div className="flex w-full justify-between items-center p-3">
          <Link to="/">
            <img src={binancelogo} className="w-20" alt="Binance Logo" />
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-6 text-sm font-medium">
            <Link to="/buy-crypto" className="hover:text-yellow-500">
              Buy Crypto
            </Link>
            <Link to="/markets" className="hover:text-yellow-500">
              Markets
            </Link>
            <Link to="/trade" className="hover:text-yellow-500">
              Trade
            </Link>
            <Link to="/futures" className="hover:text-yellow-500">
              Futures
            </Link>
            <Link to="/earn" className="hover:text-yellow-500">
              Earn
            </Link>
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search Crypto currency"
            className="border-2 rounded-sm p-2"
          />
          {}
          <Link to="/login" className="hover:text-yellow-500 mr-2">
            {isLoggedIn ? "Logout" : "Login"}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
