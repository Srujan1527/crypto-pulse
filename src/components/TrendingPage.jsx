import React, { useEffect } from "react";
import useCryptoStore from "../store/useCryptoStore";
import { Link } from "react-router-dom";

const TrendingPage = () => {
  const { trendingListings, setTrendingListings } = useCryptoStore();
  useEffect(() => {
    const getCoinsData = async () => {
      const CRYPTO_BASE_URL = import.meta.env.VITE_CRYPTO_BASE_URL;
      const CRYPTO_API_KEY = import.meta.env.VITE_CRYPTO_API_KEY;
      const CRYPTO_HEADER = import.meta.env.VITE_CRYPTO_HEADER;
      const options = {
        method: "GET",
        headers: {
          [CRYPTO_HEADER]: CRYPTO_API_KEY,
        },
      };

      try {
        const response = await fetch(
          `${CRYPTO_BASE_URL}/search/trending?vs_currency=usd`,
          options
        );

        const data = await response.json();
        setTrendingListings(data.coins);
      } catch (e) {
        console.log(e);
      }
    };

    getCoinsData();
  }, []);

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
            <span className="w-1/6 truncate">Market Cap Rank ($)</span>
          </div>

          {/* Table Body */}
          {trendingListings.slice(0, 5).map((each) => {
            const coin = each.item;

            return (
              <div
                key={coin.id}
                className="flex justify-between items-center text-gray-800 mb-2"
              >
                <span className="w-1/4 truncate text-base">{coin.name}</span>
                <span className="w-1/6 uppercase text-sm">{coin.symbol}</span>
                <span className="w-1/6">
                  <img src={coin.thumb} alt={coin.name} className="w-6 h-6" />
                </span>
                <span className="w-1/6 text-sm">
                  ${coin.data.price.toFixed(2)}
                </span>
                <span className={`w-1/6 text-sm `}>{coin.market_cap_rank}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TrendingPage;
