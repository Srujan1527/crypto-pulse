import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { create } from "zustand";
import { auth } from "../firebase/firebase";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      loading: false,
      error: null,
      setLoading: (value) => set({ loading: value }),
      login: async (email, password) => {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );

          set({ user: userCredential.user, error: null });
          return userCredential.user;
        } catch (e) {
          set({ error: e.message, loading: false });
          throw e;
        }
      },
      logout: async () => {
        try {
          set({ user: null });
          await signOut(auth);
        } catch (e) {
          set({ error: e.message });
        }
      },

      setUser: (userData) => set({ user: userData, loading: false }),
      clearUser: () => set({ user: null }),
    }),
    { name: "auth-store", storage: createJSONStorage(() => localStorage) }
  )
);

export default useAuthStore;
