import type { User } from "../types/user";
import { api } from "./client";

export const authApi = {
  async login(data: Omit<User, "username" | "id" | "role" | "assignedArena">) {
    const res = await api.post("/auth/login", data);
    return res.data.data as User;
  },

  async register(data: Omit<User, "id">) {
    const res = await api.post("/auth/register", data);
    return res.data.data as User;
  },

  async me() {
    const res = await api.get("/auth/me");
    return res.data.data as User;
  },

  async logout() {
    await api.post("/auth/logout");
  },
};
