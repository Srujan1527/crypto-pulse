import React from "react";

const MostTrendingCoinsPage = ({ trendingCoins }) => {
  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">🔥 Most Trending Coins</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border border-gray-200">
          <thead className="bg-gray-50 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Symbol</th>
              <th className="px-4 py-2">Market Cap Rank</th>
              <th className="px-4 py-2">Price (USD)</th>
              <th className="px-4 py-2">24h Change</th>
            </tr>
          </thead>
          <tbody>
            {trendingCoins.map((item, index) => {
              const coin = item.item;
              return (
                <tr key={coin.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2 flex items-center gap-2">
                    <img
                      src={coin.small}
                      alt={coin.name}
                      className="w-5 h-5 rounded-full"
                    />
                    {coin.name}
                  </td>
                  <td className="px-4 py-2 uppercase">{coin.symbol}</td>
                  <td className="px-4 py-2">{coin.market_cap_rank || "-"}</td>
                  <td className="px-4 py-2">
                    {coin.price_btc
                      ? `$${(coin.price_btc * 60000).toFixed(2)}`
                      : "-"}
                  </td>
                  <td className="px-4 py-2 text-green-500 font-medium">
                    {coin.score !== undefined ? `+${coin.score}%` : "-"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MostTrendingCoinsPage;
