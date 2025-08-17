import { useEffect } from "react";
import useCryptoStore from "../store/useCryptoStore";

const TrendingPage = () => {
  const { trendingListings, setTrendingListings } = useCryptoStore();

  useEffect(() => {
    const getCoinsData = async () => {
      const BASE_URL = import.meta.env.VITE_BASE_API_URL;

      try {
        const response = await fetch(
          `${BASE_URL}/search/trending?vs_currency=usd`
        );
        const data = await response.json();
        setTrendingListings(data);
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
