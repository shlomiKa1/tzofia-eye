import type { Alert } from "../types/alert";
import { clientRequest } from "./client";

export const alertApi = {
  getAll: async () =>
    await clientRequest<Alert[]>("/alerts", {
      method: "get",
    }),

  getById: async (id: number) =>
    await clientRequest<Alert>(`/alerts/${id}`, { method: "get" }),

  create: async (data: Alert) =>
    clientRequest<Alert>(`/alerts`, { method: "post", data }),

  update: async (id: number, data: Alert) =>
    await clientRequest<Alert>(`/alerts/${id}`, { method: "put", data }),

  remove: async (id: number) =>
    await clientRequest<Alert>(`/alerts/${id}`, { method: "get" }),
};
