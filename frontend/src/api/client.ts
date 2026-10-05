import axios, { AxiosError } from "axios";
import { SERVER_URL } from "../config";

interface ApiRequest {
  method: "get" | "post" | "put" | "delete";
  data?: unknown;
}

class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

const api = axios.create({ baseURL: SERVER_URL, withCredentials: true });

export async function clientRequest<T>(
  endpoint: string,
  { method, data }: ApiRequest,
) {
  try {
    let res = null;

    if (["post", "put"].includes(method)) {
      res = await api.post<T>(endpoint, { data });
    } else {
      res = await api[method]<T>(endpoint);
    }

    return res.data;
  } catch (error) {
    if (axios.isAxiosError<AxiosError>(error)) {
      if (error.status && error.status < 500)
        throw new ApiError(error.status, error.message);
      throw new ApiError(0, "Somthing went wrong");
    }
  }
}
