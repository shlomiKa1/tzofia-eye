import type { Alert } from "../types/alert";
import { api } from "./client";

export const alertApi = {
  async getAll() {
    const res = await api.get(`/alerts`);
    return res.data.data as Alert[];
  },

  async getById(id: number) {
    const res = await api.get(`/alerts/${id}`);
    return res.data.data as Alert;
  },

  async create(data: Alert) {
    const res = await api.post(`/alerts`, data);
    return res.data.data as Alert;
  },

  async update(id: number, data: Partial<Alert>) {
    const res = await api.put(`/alerts/${id}`, data);
    return res.data.data as Alert;
  },

  async remove(id: number) {
    const res = await api.delete(`/alerts/${id}`);
    return res.data.data as Alert;
  },
};
