import { create } from "zustand";
import { authApi } from "../api/authApi";
import type { User } from "../types/user";

interface authStore {
  user: User | null;
  status: "checking" | "logedIn" | "logedOut";
  setStatus: () => Promise<void>;
  setUser: (user: User) => void;
  setLogout: () => Promise<void>;
}

export const useAuthStore = create<authStore>((set) => ({
  user: null,
  status: "checking",
  setStatus: async () => {
    try {
      set({ user: await authApi.me(), status: "logedIn" });
    } catch {
      set({ user: null, status: "checking" });
    }
  },
  setUser: (user: User) => set({ user, status: "logedIn" }),
  setLogout: async () => {
    try {
      await authApi.logout();
      return set({ user: null, status: "logedOut" });
    } catch {
      return set({ status: "checking" });
    }
  },
}));
