import { create } from "zustand";

import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL;
const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      loading: false,
      token: localStorage.getItem("token") || null,
      error: null,
      setLoading: (value) => set({ loading: value }),

      login: async (email, password) => {
        set({ loading: true, error: null });
        try {
          const { data } = await axios.post("/auth/login", { email, password });

          set({
            user: { username: data.username, email: data.email },
            token: data.token,
            loading: false,
          });

          localStorage.setItem("token", data.token);

          return { success: true, message: "Login Successful" };
        } catch (e) {
          set({
            error: e.response?.data?.message || "Login Failed",
            loading: false,
          });
          return {
            success: false,
            message: e.response?.data?.message || "Login failed",
          };
        }
      },

      signup: async (username, email, password) => {
        set({ loading: true, error: null });
        try {
          await axios.post("/auth/signup", { username, email, password });
          set({ loading: false, error: null });
          return { success: true, message: "Signup Success" };
        } catch (error) {
          set({
            error: error.response?.data?.message || "Signup failed",
            loading: false,
          });
          return {
            success: false,
            message: error.response?.data?.message || "Signup failed",
          };
        }
      },
      logout: () => {
        localStorage.removeItem("token");
        set({ user: null, token: null });
      },

      setUser: (data) =>
        set({
          user: { username: data.username, email: data.email },
          token: data.token,
          loading: false,
        }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ user: state.user, token: state.token }),
    }
  )
);

export default useAuthStore;
