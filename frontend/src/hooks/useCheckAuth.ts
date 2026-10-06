import { authApi } from "../api/authApi";
import { useAuthStore } from "../store/useAuthStore";
import type { User } from "../types/user";

export function useCheckAuth() {
  const user = useAuthStore.getState().user;
  const setUser = useAuthStore.getState().setUser;
  const setLogout = useAuthStore.getState().setLogout;

  const login = async (
    data: Omit<User, "id" | "username" | "role" | "assignedArena">,
  ) => {
    if (!user) setUser(await authApi.login(data));
  };

  const register = async (data: Omit<User, "id">) => {
    await authApi.register(data);
  };

  const logout = async () => {
    await authApi.logout();
    setLogout();
  };

  return { login, register, logout };
}
