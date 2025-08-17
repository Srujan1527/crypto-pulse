import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetailPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const BASE_URL = import.meta.env.VITE_BASE_API_URL;

    const fetchCoinData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${BASE_URL}/coins/${id}`);

        const data = await res.json();

        setCoinData(data);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchCoinData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!coinData) return <p>No data found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white shadow-lg rounded-2xl p-6">
        <img
          src={coinData.image.large}
          alt={coinData.name}
          className="w-20 h-20"
        />
        <div>
          <h1 className="text-3xl font-bold">
            {coinData.name}{" "}
            <span className="text-gray-500 text-lg">
              ({coinData.symbol.toUpperCase()})
            </span>
          </h1>
          <p className="text-gray-600 mt-2 max-w-xl">
            {coinData.description.en
              ? coinData.description.en.slice(0, 200) + "..."
              : "No description available."}
          </p>
        </div>
      </div>

      {/* Market Data */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-xl p-4">
          <p className="text-gray-500 text-sm">Current Price</p>
          <p className="text-xl font-semibold">
            ${coinData.market_data.current_price.usd.toLocaleString()}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4">
          <p className="text-gray-500 text-sm">Market Cap</p>
          <p className="text-xl font-semibold">
            ${coinData.market_data.market_cap.usd.toLocaleString()}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4">
          <p className="text-gray-500 text-sm">24h Volume</p>
          <p className="text-xl font-semibold">
            ${coinData.market_data.total_volume.usd.toLocaleString()}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4">
          <p className="text-gray-500 text-sm">24h Change</p>
          <p
            className={`text-xl font-semibold ${
              coinData.market_data.price_change_24h >= 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {coinData.market_data.price_change_24h.toFixed(2)}%
          </p>
        </div>
      </div>

      {/* Placeholder for Charts */}
      <div className="mt-10 bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Price Trend</h2>
        <p className="text-gray-500">Chart coming soon...</p>
      </div>
    </div>
  );
};

export default CoinDetailPage;
