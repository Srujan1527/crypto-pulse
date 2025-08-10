import React from "react";

const MarketTable = ({ coinsData }) => {
  console.log("MarketTable", coinsData);

  if (!Array.isArray(coinsData)) {
    return (
      <div className="text-center text-red-500 mt-4">
        {coinsData?.error || "No data available"}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-900 text-white text-sm uppercase tracking-wider">
            <th className="px-4 py-3 text-left">#</th>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-right">Price</th>
            <th className="px-4 py-3 text-right">24h %</th>
            <th className="px-4 py-3 text-right">Market Cap</th>
            <th className="px-4 py-3 text-right">Volume (24h)</th>
          </tr>
        </thead>
        <tbody>
          {coinsData?.map((coin, index) => (
            <tr
              key={coin.id}
              className=" group hover:bg-gray-800 hover:text-white transition-colors duration-200"
            >
              <td className="px-4 py-3 text-gray-400 group-hover:text-white">
                {index + 1}
              </td>
              <td className="px-4 py-3 flex items-center gap-2">
                <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                <span className="font-medium text-gray-900 group-hover:text-white ">
                  {coin.name}
                </span>
                <span className="text-gray-400 text-xs ">
                  {coin.symbol.toUpperCase()}
                </span>
              </td>
              <td className="px-4 py-3 text-right text-gray-900 group-hover:text-white">
                ${coin.current_price.toLocaleString()}
              </td>
              <td
                className={`px-4 py-3 text-right font-semibold ${
                  coin.price_change_percentage_24h >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </td>
              <td className="px-4 py-3 text-right text-gray-900 group-hover:text-white">
                ${coin.market_cap.toLocaleString()}
              </td>
              <td className="px-4 py-3 text-right text-gray-900 group-hover:text-white">
                ${coin.total_volume.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketTable;
