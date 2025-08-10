import React, { useEffect, useState } from "react";

import MarketTabs from "./Tabs/MarketTabs";
import CategoryTabs from "./Tabs/CategoryTabs";
import MarketTable from "./MarketTable";

const Markets = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeCategory, setActiveCategory] = useState(null);
  const [coinsData, setCoinsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const tabs = [
    { label: "Categories", value: "categories" },
    { label: "Most Traded", value: "most_traded" },
    { label: "Top Gainer", value: "top_gainer" },
    { label: "Top Volume", value: "top_volume" },
  ];
  const url = import.meta.env.VITE_CRYPTO_BASE_URL;
  const CRYPTO_API_KEY = import.meta.env.VITE_CRYPTO_API_KEY;
  const CRYPTO_HEADER = import.meta.env.VITE_CRYPTO_HEADER;

  const options = {
    method: "GET",
    headers: {
      [CRYPTO_HEADER]: CRYPTO_API_KEY,
    },
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(`${url}/coins/categories`, options);
      const data = await response.json();
      setCategories(data);
      console.log("DATA", data[0]?.id);
      setActiveCategory(data[0]?.id);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchCategoryCoins = async () => {
      try {
        const res = await fetch(
          `${url}/coins/markets?vs_currency=usd&category=${encodeURIComponent(
            activeCategory
          )}`,
          options
        );
        const data = await res.json();
        setCoinsData(data);
      } catch (err) {
        console.error(err.message);
        setCoinsData(null);
        throw err;
      }
    };
    fetchCategoryCoins();
  }, [activeCategory]);

  console.log("categories", categories);
  console.log("CoinData", coinsData);
  console.log("ActiveCategory", activeCategory);
  return (
    <>
      <div id="main-div">
        <MarketTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={setActiveTab}
        />
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryClick={setActiveCategory}
        />
        {coinsData !== null && <MarketTable coinsData={coinsData} />}
      </div>
    </>
  );
};

export default Markets;
