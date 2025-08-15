import React, { useEffect } from "react";
import useCryptoStore from "../store/useCryptoStore";

const PopularListings = () => {
  const { popularListings, setPopularListings } = useCryptoStore();

  useEffect(() => {
    const getCoinsData = async () => {
      const BASE_URL = import.meta.env.VITE_BASE_API_URL;
      const CRYPTO_BASE_URL = import.meta.env.VITE_CRYPTO_BASE_URL;
      const CRYPTO_API_KEY = import.meta.env.VITE_CRYPTO_API_KEY;
      const CRYPTO_HEADER = import.meta.env.VITE_CRYPTO_HEADER;

      try {
        const response = await fetch(
          `${BASE_URL}/coins/markets?vs_currency=usd`
        );
        console.log("res:", response);
        const data = await response.json();
        console.log("data:", data);
        setPopularListings(data);
      } catch (e) {
        console.log(e);
      }
    };

    getCoinsData();
  }, []);
  console.log("ZustandData", popularListings);
  return (
    <>
      <div className="w-full h-full bg-gray-100 relative overflow-hidden mt-2">
        <div className="w-full h-full bg-white p-4 rounded-lg shadow-md overflow-y-auto absolute top-0 right-0">
          {/* Table Header */}
          <div className="flex justify-between items-center font-semibold text-gray-700 border-b pb-2 mb-3">
            <span className="w-1/4">Name</span>
            <span className="w-1/6">Symbol</span>
            <span className="w-1/6">Image</span>
            <span className="w-1/6">Price ($)</span>
            <span className="w-1/6 truncate">24h Change ($)</span>
          </div>

          {/* Table Body */}
          {popularListings.slice(0, 5).map((each) => (
            <div
              key={each.id}
              className="flex justify-between items-center text-gray-800 mb-2"
            >
              <span className="w-1/4 truncate text-base">{each.name}</span>
              <span className="w-1/6 uppercase text-sm">{each.symbol}</span>
              <span className="w-1/6">
                <img src={each.image} alt={each.name} className="w-6 h-6" />
              </span>
              <span className="w-1/6 text-sm">${each.current_price}</span>
              <span
                className={`w-1/6 text-sm ${
                  each.price_change_percentage_24h > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {each.price_change_24h > 0
                  ? `+${each.price_change_percentage_24h.toFixed(2)}%`
                  : `-${each.price_change_percentage_24h.toFixed(2)}%`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularListings;
