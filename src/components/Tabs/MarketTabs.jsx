import React from "react";

const MarketTabs = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="flex justify-center mt-10 border-b -2">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabClick(tab.value)}
          className={`px-4 py-2 font-medium ${
            activeTab === tab.value
              ? " text-yellow-500 text-4xl "
              : "text-gray-400 text-md"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default MarketTabs;
