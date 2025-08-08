import { create } from "zustand";

const useCryptoStore = create((set) => ({
  popularListings: [],
  trendingListings: [],

  setPopularListings: (data) => set({ popularListings: data }),
  setTrendingListings: (data) => set({ trendingListings: data }),
}));

export default useCryptoStore;
