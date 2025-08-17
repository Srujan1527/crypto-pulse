import binancelogo from "/binancelogo.png";

import { Link } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
const Header = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <div className="w-full bg-white shadow-md">
        <div className="flex w-full justify-between items-center p-3 cursor-pointer">
          <Link to="/">
            <img src={binancelogo} className="w-20" alt="Binance Logo" />
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-6 text-sm font-medium">
            <Link
              to="/buy-crypto"
              className="hover:text-yellow-500 cursor-pointer "
            >
              Buy Crypto
            </Link>
            <Link
              to="/markets"
              className="hover:text-yellow-500 cursor-pointer"
            >
              Markets
            </Link>
            <Link to="/trade" className="hover:text-yellow-500 cursor-pointer">
              Trade
            </Link>
            <Link
              to="/futures"
              className="hover:text-yellow-500 cursor-pointer"
            >
              Futures
            </Link>
            <Link to="/earn" className="hover:text-yellow-500 cursor-pointer">
              Earn
            </Link>
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search Crypto currency"
            className="border-2 rounded-sm p-2"
          />
          {user ? (
            <button
              onClick={handleLogout}
              className="hover:text-yellow-500 ml-4 cursor-pointer"
            >
              {" "}
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="hover:text-yellow-500 ml-4 cursor-pointer"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
