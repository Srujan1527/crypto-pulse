import React from "react";

const MarketTable = ({ coinsData, activeCategory }) => {
  console.log("CoinsData", coinsData);
  if (!Array.isArray(coinsData)) {
    return (
      <div className="text-center text-red-500 mt-4">
        {coinsData?.error || "No data available"}
      </div>
    );
  }
  const categoryTitle = `Top ${activeCategory?.name} Tokens by Market Capitalization`;
  const categoryParagraph = activeCategory?.content;
  const volume = activeCategory?.volume_24h;
  const cap = activeCategory?.market_cap;
  const capChange24h = activeCategory?.market_cap_change_24h;
  const topCoins = activeCategory?.top_3_coins;

  return (
    <>
      <div className="bg-gray-900 text-white p-4 rounded-lg mb-4">
        <h1 className="text-xl font-bold">{categoryTitle}</h1>
        <p className="text-gray-400 text-sm mt-1">{categoryParagraph}</p>

        <div className="flex items-center gap-8 mt-4">
          <div>
            <p className="text-gray-400 text-xs uppercase">Volume (24h)</p>
            <p className="font-semibold">${volume?.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs uppercase">Market Cap</p>
            <p className="font-semibold">${cap?.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs uppercase">
              Market Cap Change (24h)
            </p>
            <p
              className={`font-semibold ${
                capChange24h >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {capChange24h?.toFixed(2)}%
            </p>
          </div>
          <div className="flex items-center gap-2">
            {topCoins?.map((coinUrl, idx) => (
              <img
                key={idx}
                src={coinUrl}
                alt={`Top coin ${idx + 1}`}
                className="w-8 h-8 rounded-full border border-gray-700"
              />
            ))}
          </div>
        </div>
      </div>
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
                key={index}
                className=" group hover:bg-gray-800 hover:text-white transition-colors duration-200"
              >
                <td className="px-4 py-3 text-gray-400 group-hover:text-white">
                  {index + 1}
                </td>
                <td className="px-4 py-3 flex items-center gap-2">
                  <img src={coin?.image} alt={coin?.name} className="w-6 h-6" />
                  <span className="font-medium text-gray-900 group-hover:text-white ">
                    {coin?.name}
                  </span>
                  <span className="text-gray-400 text-xs ">
                    {coin?.symbol.toUpperCase()}
                  </span>
                </td>
                <td className="px-4 py-3 text-right text-gray-900 group-hover:text-white">
                  ${coin?.current_price.toLocaleString()}
                </td>
                <td
                  className={`px-4 py-3 text-right font-semibold ${
                    coin?.price_change_percentage_24h >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {coin?.price_change_percentage_24h?.toFixed(2)}%
                </td>
                <td className="px-4 py-3 text-right text-gray-900 group-hover:text-white">
                  ${coin?.market_cap.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-right text-gray-900 group-hover:text-white">
                  ${coin?.total_volume.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MarketTable;
