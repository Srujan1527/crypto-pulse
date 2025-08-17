import { useEffect, useState } from "react";
import MarketTabs from "./Tabs/MarketTabs";
import CategoryTabs from "./Tabs/CategoryTabs";
import MarketTable from "./MarketTable";
import MostTrendingCoinsPage from "./MostTrendingCoinsPage";

const Markets = () => {
  const [activeTab, setActiveTab] = useState("categories");
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [coinsData, setCoinsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const tabs = [
    { label: "Categories", value: "categories" },
    { label: "Most Trending", value: "most_trending" },
  ];

  const BASE_URL = import.meta.env.VITE_BASE_API_URL;

  useEffect(() => {
    if (activeTab === "categories") {
      const fetchCategories = async () => {
        const response = await fetch(`${BASE_URL}/coins/categories/`);
        const data = await response.json();
        setCategories(data);
        // console.log("DATA", data[0]?.id);
        setActiveCategoryId(data[0]?.id);
        setActiveCategory(data[0]);
      };
      fetchCategories();
    }
  }, [activeTab]);

  useEffect(() => {
    if (activeTab === "categories" && activeCategoryId) {
      const fetchCategoryCoins = async () => {
        try {
          setLoading(true);
          const res = await fetch(
            `${BASE_URL}/coins/markets?vs_currency=usd&category=${encodeURIComponent(
              activeCategoryId
            )}`
          );
          const data = await res.json();

          setCoinsData(data);
          setLoading(false);
        } catch (err) {
          console.error(err.message);
          setCoinsData(null);
          throw err;
        }
      };
      fetchCategoryCoins();
    }
  }, [activeCategoryId, activeTab]);

  useEffect(() => {
    if (activeTab !== "categories") {
      const fetchOtherCoins = async () => {
        let endpoint = "";

        if (activeTab === "most_trending") {
          endpoint = `${BASE_URL}/search/trending?vs_currency=usd`;
          try {
            setLoading(true);
            const res = await fetch(endpoint);
            const data = await res.json();
            console.log("trendingTab", data);
            setTrendingCoins(data);
            setLoading(false);
          } catch (error) {
            setCoinsData(null);
            console.error(error.message);
          }
        }
      };
      fetchOtherCoins();
    }
  }, [activeTab]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="text-gray-500">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <div id="main-div">
        <MarketTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={setActiveTab}
        />
        {activeTab === "categories" && (
          <CategoryTabs
            categories={categories}
            activeCategoryId={activeCategoryId}
            onCategoryIdClick={setActiveCategoryId}
            onCategoryClick={setActiveCategory}
          />
        )}

        {activeTab === "categories" && (
          <MarketTable coinsData={coinsData} activeCategory={activeCategory} />
        )}
        {activeTab === "most_trending" && (
          <MostTrendingCoinsPage trendingCoins={trendingCoins} />
        )}
      </div>
    </>
  );
};

export default Markets;
